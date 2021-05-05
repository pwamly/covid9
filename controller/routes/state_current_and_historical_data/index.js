"use strict";

import { Router } from "express";
import current_all_state_info from "./current_all_state_info";
import current_single_state from "./current_single_state";
import general_state_info from "./general_state_info";
import recently_info_states from "./recently_info_states";
import recently_info_single_state from "./recently_info_single_state";
import all_data_single_state from "./all_data_single_state";
import specific_state_info from "./specific_state_info";
import us_current_and_historica_data from "../us_current_and_historica_data";

import status from "../status";

const reports = Router();

//....................... all  endpoints for States Current and Historical Data

reports.get("/allstates", current_all_state_info);
reports.get("/state", current_single_state);
reports.get("/total_info/allstates/", general_state_info);
reports.get("/recently_info/allstates", recently_info_states);
reports.get("/recently_info/state", recently_info_single_state);
reports.get("/all_data_state/", all_data_single_state);
reports.get("/specific_state/", specific_state_info);

//....................... endpoint for api status

reports.get("/status/", status);

//............. endpoint for US Current and Historical Data

reports.get("/us", us_current_and_historica_data);
reports.get("/all_data_state/", all_data_single_state);
reports.get("/specific_state/", specific_state_info);

module.exports = reports;