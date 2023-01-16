import express from "express";
import morgan from "morgan";
import cors from "cors";
import createRouter from "./routes/createRouter"
import viewRouter from "./routes/viewRouter"
import joinRouter from "./routes/joinRouter"



const app = express();
const PORT = 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/create", createRouter);
app.use("/api/join", joinRouter);
app.use("/api/view", viewRouter);

app.listen(PORT, function () {
  console.log(`server is running in port ${PORT}`);
});
