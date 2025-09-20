import { Router } from "express";
import PersonalRot from "./personalRot.js";

export const indexRot = Router();

// Mount PersonalRot di bawah /api
indexRot.use("/api", PersonalRot);