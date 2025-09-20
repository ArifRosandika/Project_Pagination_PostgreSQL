import express from "express";
import cors from "cors";
import { indexRot } from "../routes/indexRot.js";

const appMidleware = express();

appMidleware.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    preflightContinue: false,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));

appMidleware.use(express.json());
appMidleware.use(indexRot);

export default appMidleware;