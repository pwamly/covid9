"use strict";

import instance from "../../../config/axiosConfig";

module.exports = async function allreports(req, res) {
    const { date } = req.query;
    console.log("");
    const { data } = await instance.get(`/us/${date}.json`, {});
    return res.json({ data });
};