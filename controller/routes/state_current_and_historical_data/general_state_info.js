"use strict";

import instance from "../../../config/axiosConfig";

module.exports = async function allreports(req, res) {
    const { data } = await instance.get("/states/daily.json", {});
    return res.json({ data });
};