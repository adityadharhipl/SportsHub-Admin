import { registerUser, loginUser } from './auth.service';

export const register = async (req: any, res: any) => {
  try {
    const result = await registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully', data: result });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const result = await loginUser(req.body);
    res.status(200).json({ message: 'Login successful', data: result });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
