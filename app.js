import express from "express";
import morgan from "morgan";
import cors from "cors";
import tripRouter from "./routes/tripRouter.js"
import memberRouter from "./routes/memberRouter.js"
import choicesRouter from "./routes/choicesRouter.js"
import pollRouter from "./routes/pollRouter.js"



const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/trip", tripRouter);
app.use("/api/member", memberRouter);
app.use("/api/poll", pollRouter);
app.use("/api/choices", choicesRouter);

app.listen(PORT, function () {
  console.log(`server is running in port ${PORT}`);
});
