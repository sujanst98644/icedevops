import express from "express";
import { signup, login } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

/* Example protected route */
router.get("/profile", protect, (req, res) => {
  res.json({ user: req.user });
});

export default router;