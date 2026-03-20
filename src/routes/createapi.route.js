import { Router } from "express";
import { createApiUser, deleteApiUser, getAllApiUsers, getParticularUser, updateParticularData } from "../controllers/ApiCreate.controller.js";

const CreateApiRouter = Router();

CreateApiRouter.post("/", createApiUser);
CreateApiRouter.get("/", getAllApiUsers);
CreateApiRouter.delete("/:id", deleteApiUser);
CreateApiRouter.get("/:id", getParticularUser);
CreateApiRouter.patch("/:id", updateParticularData);

export default CreateApiRouter;
