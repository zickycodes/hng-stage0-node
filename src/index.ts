// src/index.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Middleware to log the request
app.use((req: Request, res: Response, next: NextFunction) => {
    const start = process.hrtime();
    res.on('finish', () => {
        const [seconds, nanoseconds] = process.hrtime(start);
        const durationInMs = (seconds * 1000 + nanoseconds / 1e6).toFixed(2);
        
        // Check if the request took more than 500ms
        if (parseFloat(durationInMs) > 500) {
            
            console.log(`Request to ${req.path} took ${durationInMs}ms, which is more than 500ms.`);
            
            //error response or stop further processing
            return res.status(408).json({ error: "Request Timeout - Taking too long to process." });
        }
        
        console.log(`Request to ${req.path} took ${durationInMs}ms`);
    });

    // Proceed to the next middleware or router only if the duration is <= 500ms
    next();
});


// Define the API endpoint
app.get('/', (req: Request, res: Response) => {
  const response = {
    email: 'ezekieluduak2@gmail.com', 
    current_datetime: new Date().toISOString(), 
    github_url: 'https://github.com/zickycodes/hng-stage0-node',
  };
  res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});