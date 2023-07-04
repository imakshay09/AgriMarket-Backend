import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController
} from "../controllers/authController.js";

import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
// to use router object
const router = express.Router();

//routing
router.post("/register", registerController); // to register user in database
router.post("/login", loginController); // to login user
router.post("/forgot-password",forgotPasswordController);




router.get("/test", requireSignIn, isAdmin, testController); // to test user login passing the requireSignIn and isAdmin middleware

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
