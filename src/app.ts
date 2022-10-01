import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";

const app = express();

// middlewares
app.use(helmet());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'hi all' })
});

app.listen(5000, () => {
  console.log(`Application listening at http://localhost:5000`);
});

