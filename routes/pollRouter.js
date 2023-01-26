import express from "express";

const pollRouter = express.Router();

import { createPoll } from "../models/poll.js";

pollRouter.post("/", async function (req, res) {
  try{
    const result = await createPoll(req.body);
  res.json({ success: true, payload: result });
  } catch (err){
    console.log(err)
  }
  
});

export default pollRouter;
