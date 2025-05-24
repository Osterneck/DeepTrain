import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic API routes for the application
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'DeepTrain server is running' });
});

// Serve static files from client/public directory (for videos)
app.use('/videos', express.static(join(__dirname, 'client/public/videos')));
app.use(express.static(join(__dirname, 'client/public')));

// Serve the main index.html for all routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 10000;
const server = createServer(app);

server.listen(PORT, '0.0.0.0', () => {
  console.log(`DeepTrain server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});