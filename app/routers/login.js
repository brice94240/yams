import express from "express";
import registerController from "../controllers/register.js";
import loginController from "../controllers/login.js";
import gameController from "../controllers/game.js";
import playController from "../controllers/play.js";
import logoutController from "../controllers/logout.js";
import authMiddleware from "../middlewares/checkUser.js";
import finishedGameMiddleWare from "../middlewares/finishedGame.js";

const router = express.Router();

router.get("/register", registerController);
router.post("/register", registerController);
router.get("/login", loginController);
router.post("/login", loginController);
router.get("/game", authMiddleware, gameController);
router.get("/play", finishedGameMiddleWare, playController);
router.get("/logout", logoutController);

export default router;
