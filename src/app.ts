import * as express from "express";
import {Request, Response} from "express";
import * as dotenv from "dotenv";
import helmet from "helmet";
import cors = require("cors");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4999;

if (process.env.NODE_ENV === "development") {
  app.use(cors<Request>());
}

// middlewares
app.use(helmet());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world",
  });
});
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
