import { Router } from "express";
import { ProductController } from "./controllers/productController";
import { UserController } from "./controllers/userController";
const productController = new ProductController();
const userController = new UserController();

export const router = Router();

//Rotas de Produtos.
router.get('/produtos', productController.getAllProducts);
router.get('/produtos/:id', productController.getProductByID);

//Rotas de Usuários.
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUserByID);
router.post('/userpost', userController.postNewUser);