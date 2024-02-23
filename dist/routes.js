"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const productController_1 = require("./controllers/productController");
const productController = new productController_1.ProductController();
exports.router = (0, express_1.Router)();
exports.router.get('/produtos', productController.getAllProduct);
exports.router.get('/produtos/:id', productController.getProduct);
