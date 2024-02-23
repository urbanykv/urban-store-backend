"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_bd = process.env.USER_BD;
const pass_bd = process.env.PASS_BD;
const connect = () => {
    mongoose_1.default.connect(`mongodb+srv://${user_bd}:${pass_bd}@urbanstore.bi2aynu.mongodb.net/urban_store?retryWrites=true&w=majority`);
    const connection = mongoose_1.default.connection;
    connection.on("error", () => console.log("Erro ao conectar com o mongoDB"));
    connection.on("open", () => console.log("Conectado com o mongoDB"));
};
exports.connect = connect;
const produtoSchema = new mongoose_1.default.Schema({
    id: { type: Number, required: true },
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String, required: true },
    rating: { type: Number, required: true },
    imagem: { type: String, required: true }
});
exports.Produto = mongoose_1.default.model("Produto", produtoSchema);
