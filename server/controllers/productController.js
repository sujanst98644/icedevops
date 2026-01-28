import IceCream from "../models/productModel.js";

export const createIceCream = async (req, res) => {
  console.log("REQ BODY:", req.body);
  console.log("REQ FILE:", req.file);
  console.log("REQ USER:", req.user);
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const iceCream = await IceCream.create({
      name: req.body.name,
      flavour: req.body.flavour,
      price: req.body.price,
      image: req.file.path, // Cloudinary URL
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: iceCream,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await IceCream.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: [],
    });
  }
};
