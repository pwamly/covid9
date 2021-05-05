"use strict";

import { Router } from "express";
import current_all_state_info from "./current_all_state_info";
import current_single_state from "./current_single_state";
import general_state_info from "./general_state_info";
import recently_info_state from "./recently_info_state";

const reports = Router();

reports.get("/allstates", current_all_state_info);
reports.get("/state", current_single_state);
reports.get("/total_info/allstates/", general_state_info);
reports.get("/recently_info/allstates", recently_info_state);

reports.delete("/deletehistory/:id", async(req, res) => {
    const { id } = req.params;
});
module.exports = reports;