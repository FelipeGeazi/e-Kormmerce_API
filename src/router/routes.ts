// src/routes.ts
import { Router } from "express";
import userCreateController from "../controller/userCreate.controller";
import userListController from "../controller/userList.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users" userListController);

export default routes;
