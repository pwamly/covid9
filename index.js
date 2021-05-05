"use strict";
require("dotenv").config();
import express from "express";
import controller from "./controller";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = process.env.PORT;

const orig = "http://localhost:5500";

app.use(cors({ origin: orig, credentials: true }));

app.use(
    express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

app.use("/", controller);

app.listen(port, () => {
    console.log("server started at http://localhost:" + port);
});