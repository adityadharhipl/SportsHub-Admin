import axios from 'axios';

// Base API instance
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach Token
api.interceptors.request.use(
  (config) => {
    // In a real browser environment, fetch from localStorage
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle 401 & Refresh Token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // If error is 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Attempt to refresh the token
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) throw new Error('No refresh token available');
        
        const { data } = await axios.post(`${api.defaults.baseURL}/auth/refresh`, {
          refreshToken,
        });
        
        // Save new tokens
        localStorage.setItem('accessToken', data.accessToken);
        if (data.refreshToken) {
           localStorage.setItem('refreshToken', data.refreshToken);
        }
        
        // Retry the original request
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
        
      } catch (refreshError) {
        // Refresh token failed, force logout
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

// Generic Wrapper Methods for ease of use
export const apiGet = <T>(url: string, params?: any) => api.get<T>(url, { params }).then(res => res.data);
export const apiPost = <T>(url: string, data?: any) => api.post<T>(url, data).then(res => res.data);
export const apiPut = <T>(url: string, data?: any) => api.put<T>(url, data).then(res => res.data);
export const apiDelete = <T>(url: string) => api.delete<T>(url).then(res => res.data);
