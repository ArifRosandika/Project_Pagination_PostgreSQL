import express from "express";
import dotenv from "dotenv";
import appMidleware from "./middleware/indexMid.js";

const app = express();
dotenv.config();
app.use(appMidleware);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT || 5000);
});