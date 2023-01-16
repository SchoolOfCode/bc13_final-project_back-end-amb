import express from "express";

const createRouter = express.Router();

// import function from models:


createRouter.post("/", async function (req,res) {
    const result =await createTrip(req.body)
    res.json({success:true,payload: result});
})












export default createRouter