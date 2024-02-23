import { Router } from "express";
import { ProductController } from "./controllers/productController";
const productController = new ProductController();


export const router = Router();

router.get('/produtos', productController.getAllProduct);
router.get('/produtos/:id', productController.getProduct)