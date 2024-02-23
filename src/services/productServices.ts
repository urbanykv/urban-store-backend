import { Produto } from "../connection/connection";

export class ProductService {
  async getAllProduct(): Promise<any> {
    const db = await Produto.find();
    return db;
  }

  async getProduct(id: string): Promise<any> {
    const produtos = await Produto.find();
    const produto = produtos.filter( produto => produto.id == id ? produto : null )
    return produto
  }
}