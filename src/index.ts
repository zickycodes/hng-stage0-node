// src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define the API endpoint
app.get('/', (req: Request, res: Response) => {
  const response = {
    email: 'ezekieluduak2@gmail.com', 
    current_datetime: new Date().toISOString(), 
    github_url: 'https://github.com/yourusername/your-repo',
  };
  res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});