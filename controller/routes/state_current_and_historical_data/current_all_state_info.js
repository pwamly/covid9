"use strict";

import instance from "../../../config/axiosConfig";

module.exports = async function allreports(req, res) {
    const { data } = await instance.get("/states/info.json", {});
    console.log("all states info", data);
    return res.json({ data });
};