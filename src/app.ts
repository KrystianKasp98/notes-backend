import * as express from "express";
import {Request, Response} from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

const PORT = 5000;

// middlewares
app.use(helmet());
app.use(express.json());
app.use(cors);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world",
  });
});
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
