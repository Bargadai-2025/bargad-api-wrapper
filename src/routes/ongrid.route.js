import { Router } from "express";
import { ResponsePhoneFromOngrid } from "../controllers/ongrid.controller.js";

const ongridRouter = Router();

ongridRouter.post("/phone-number", ResponsePhoneFromOngrid);

export default ongridRouter;
