"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const connection_1 = require("./connection/connection");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(cors_1.default);
app.use(express_1.default.json());
app.use(routes_1.router);
(0, connection_1.connect)();
const port = process.env.PORT;
app.listen(port, () => console.log('server on'));
