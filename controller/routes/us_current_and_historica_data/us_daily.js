"use strict";

import instance from "../../../config/axiosConfig";

module.exports = async function allreports(req, res) {
    console.log("");
    const { data } = await instance.get("/us/daily.json", {});
    return res.json({ data });
};