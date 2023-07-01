import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('goeun and quigley gear library!');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
