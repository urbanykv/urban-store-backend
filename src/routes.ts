import { Router } from "express";
import { ProductController } from "./controllers/productController";
const productController = new ProductController();

export const router = Router();

router.get('/produtos', productController.getAllProducts);
router.get('/produtos/:id', productController.getProductByID);
