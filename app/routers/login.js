import express from "express";
import registerController from "../controllers/register.js";
import loginController from "../controllers/login.js";
import adminController from "../controllers/game.js";
import logoutController from "../controllers/logout.js";
import authMiddleware from "../middlewares/checkUser.js";

const router = express.Router();

router.get("/register", registerController);
router.post("/register", registerController);
router.get("/login", loginController);
router.post("/login", loginController);
router.get("/game", authMiddleware, adminController);
router.get("/logout", logoutController);

export default router;
