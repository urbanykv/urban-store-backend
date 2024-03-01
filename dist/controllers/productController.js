"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const productServices_1 = require("../services/productServices");
const productService = new productServices_1.ProductService();
class ProductController {
    constructor() {
        this.getAllProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allProducts = yield productService.getAllProducts();
                return res.json(allProducts);
            }
            catch (_a) {
                return res.status(404).json({ message: 'Não foi possivel encontrar os dados.' });
            }
            ;
        });
        this.getProductByID = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const product = yield productService.getProductByID(id);
                return res.json(product);
            }
            catch (_b) {
                return res.status(404).json({ message: 'Não foi possivel encontrar os dados.' });
            }
            ;
        });
    }
}
exports.ProductController = ProductController;
;
