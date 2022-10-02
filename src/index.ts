import app from "./app";
import * as dotenv from "dotenv";
import MongoAPI from "../src/db/index";

dotenv.config();
const PORT = process.env.PORT || 4999;

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

const dbInit = async () => {
  await MongoAPI.init();
};

dbInit().catch(err => console.log(err));
