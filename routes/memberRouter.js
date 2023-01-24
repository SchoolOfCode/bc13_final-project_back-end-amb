import express from "express";

const memberRouter = express.Router();

import { createMember, emailMember } from "../models/member.js";

memberRouter.post("/", async function (req, res) {
  console.log(req.body);
  const result = await createMember(req.body);
  res.json({ success: true, payload: result });
});

memberRouter.post("/email", async function (req, res) {
  console.log(req.body);
  const result = await emailMember(req.body);
  res.json({ success: true, payload: result });
});

export default memberRouter;
