import { Router } from "express";
import {
  ResponseEmailFromIPQS,
  ResponseIpFromIPQS,
  ResponsePhoneFromIPQS,
} from "../controllers/ipqs.controller.js";

const ipqsRouter = Router();

ipqsRouter.post("/phone", ResponsePhoneFromIPQS);
ipqsRouter.post("/email", ResponseEmailFromIPQS);
ipqsRouter.post("/ip", ResponseIpFromIPQS);

export default ipqsRouter;
