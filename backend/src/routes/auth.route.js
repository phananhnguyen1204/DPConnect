import express from "express";
import trimRequest from "trim-requesttrimRequest, ";
import {
  login,
  logout,
  refreshToken,
  register,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/register").post(trimRequest, register);
router.route("/login").post(trimRequest, login);
router.route("/logout").post(trimRequest, logout);
router.route("/refreshToken").post(trimRequest, refreshToken);
export default router;
