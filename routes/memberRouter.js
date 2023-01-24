import express from "express";

const memberRouter = express.Router();

import { createMember, emailMember } from "../models/member.js";

memberRouter.post("/", async function (req, res) {
  console.log(req.body);
  try{
    const result = await createMember(req.body);
  res.json({ success: true, payload: result });
  } catch(err){
    console.log(err)
  }
  
});

memberRouter.post("/email", async function (req, res) {
  console.log(req.body);
  try{
    const result = await emailMember(req.body);
  res.json({ success: true, payload: result });
  } catch(err){
    console.log(err)
  }
  
});

export default memberRouter;
