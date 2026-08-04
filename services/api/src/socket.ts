import { Server as SocketIOServer } from 'socket.io';
import { Server as HttpServer } from 'http';

export function initializeSocket(httpServer: HttpServer) {
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: '*', // Allows all origins for development, update in production
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(`[Socket] User connected: ${socket.id}`);

    // --- Live Score Events ---
    socket.on('join_match', (matchId) => {
      socket.join(`match_${matchId}`);
      console.log(`[Socket] User ${socket.id} joined match_${matchId}`);
    });

    socket.on('leave_match', (matchId) => {
      socket.leave(`match_${matchId}`);
      console.log(`[Socket] User ${socket.id} left match_${matchId}`);
    });

    socket.on('disconnect', () => {
      console.log(`[Socket] User disconnected: ${socket.id}`);
    });
  });

  return io;
}
