"use strict";

import { Router } from "express";
import us_daily from "./us_daily";
import us_current from "./us_current";
import us_specific_date from "./us_specific_date";

const us = Router();

us.get("/", us_daily);
us.get("/recently/", us_current);
us.get("/date/", us_specific_date);

module.exports = us;