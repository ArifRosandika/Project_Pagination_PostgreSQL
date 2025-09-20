import { Router } from "express";
import { getPersonal } from "../controllers/personalCon.js";

const PersonalRot = Router();

PersonalRot.get("/personal", getPersonal);

export default PersonalRot;