import express from "express";

const tripRouter = express.Router();
import { createTrip } from "../models/trip.js";


tripRouter.post("/", async function (req,res) {
    const result = await createTrip(req.body)
    res.json({success:true,payload: result});
})












export default tripRouter