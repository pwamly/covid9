"use strict";

import { Router } from "express";
import state_info from "./state_current_and_historical_data";
const api = Router();
api.use("/covid/basicinfo/", state_info);
api.use("/covid/", state_info);

module.exports = api;