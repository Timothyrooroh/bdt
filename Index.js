import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./Config/Database.js";
import TokoRouter from "./Routes/TokoRoute.js"
import GudangRoute from "./Routes/GudangRoute.js"
import TransaksiRoute from "./Routes/TransaksiRoute.js"

dotenv.config();

const app = express();

// (async () => {
//   await db.sync();
// })();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3006",
  })
);
// app.use(bodyparser.json());
app.use(bodyParser.json());
app.use(express.json());
app.use(TokoRouter);
app.use(GudangRoute);
app.use(TransaksiRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...", process.env.APP_PORT);
});
