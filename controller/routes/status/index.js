"use strict";

import { Router } from "express";

const profile = Router();

profile.get("/:id", async(req, res) => {
    const { id } = req.params;
});

module.exports = profile;