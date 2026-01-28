import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { upload } from "../config/multer.js";
import {
  createIceCream,
  getAllProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/products", protect, upload.single("image"), createIceCream);
router.get("/flavours", getAllProducts); // PUBLIC

export default router;
