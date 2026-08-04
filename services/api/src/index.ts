import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import authRoutes from './modules/auth/auth.routes';
import http from 'http';
import { initializeSocket } from './socket';

const app = express();
const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Initialize Socket.io
const io = initializeSocket(server);

server.listen(PORT, () => {
  console.log(`Server is successfully running on port ${PORT}`);
});
