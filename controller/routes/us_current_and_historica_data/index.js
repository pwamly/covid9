"use strict";

import { Router } from "express";
import us_daily from "./us_daily";

const us = Router();

us.get("/", us_daily);

module.exports = us;