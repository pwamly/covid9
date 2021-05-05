"use strict";
import { Router } from "express";
import routes from "./routes";

// authenticate the requests
const isAuth = true;

const controller = Router();
controller.use("/api", routes);

module.exports = controller;