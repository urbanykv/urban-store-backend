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
exports.ProductService = void 0;
const connection_1 = require("../connection/connection");
class ProductService {
    constructor() {
        this.getAllProducts = () => __awaiter(this, void 0, void 0, function* () {
            const allProducts = yield connection_1.Produto.find();
            return allProducts;
        });
        this.getProductByID = (id) => __awaiter(this, void 0, void 0, function* () {
            const produtos = yield connection_1.Produto.find();
            const produto = produtos.filter(produto => produto.id == id ? produto : null);
            return produto;
        });
    }
}
exports.ProductService = ProductService;
;
