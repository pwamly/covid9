"use strict";

import instance from "../../../config/axiosConfig";

module.exports = async function allreports(req, res) {
    const { name: state } = req.query;
    const { data } = await instance.get(`/states/${state}/current.json`, {});
    return res.json({ data });
};