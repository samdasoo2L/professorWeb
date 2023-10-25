import express from "express";
import {
  home,
  professor,
  members,
  publications,
  contact,
} from "../controllers/menuControllers";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/professor", professor);
rootRouter.get("/members", members);
rootRouter.get("/publications", publications);
rootRouter.get("/contact", contact);

export default rootRouter;
