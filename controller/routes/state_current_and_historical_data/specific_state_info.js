"use strict";

import instance from "../../../config/axiosConfig";

module.exports = async function allreports(req, res) {
    const { name: state, date } = req.query;
    const { data } = await instance.get(`/states/${state}/${date}.json`, {});
    return res.json({ data });
};