import { AppDataSource } from "./data-source";
import * as express from "express";
import { Request, Response } from "express";
import router from "./routes/route";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(express.json())
    app.use("/api/v1", router)

    app.listen(8000, () => {
      console.log(`Server running at ${8000}`);
    });
  })
  .catch((error) => console.log(error));
