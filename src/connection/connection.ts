import mongoose from "mongoose";

const user_bd = process.env.USER_BD;
const pass_bd = process.env.PASS_BD;

export const connect = () => {
  mongoose.connect(`mongodb+srv://${user_bd}:${pass_bd}@urbanstore.bi2aynu.mongodb.net/urban_store?retryWrites=true&w=majority`);

  const connection = mongoose.connection;

  connection.on("error", () => console.log("Erro ao conectar com o mongoDB"));
  connection.on("open", () => console.log("Conectado com o mongoDB"));
}

const produtoSchema = new mongoose.Schema({
  id: { type: Number, required: true},
  nome: { type: String, required: true },
  preco: { type: Number, required: true},
  descricao: { type: String, required: true},
  rating: { type: Number, required: true},
  imagem: { type: String, required: true}
});

export const Produto = mongoose.model("Produto", produtoSchema);