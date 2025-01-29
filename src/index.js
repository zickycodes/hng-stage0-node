"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Enable CORS
app.use((0, cors_1.default)());
// Define the API endpoint
app.get('/', (req, res) => {
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
