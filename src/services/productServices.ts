import { Produto } from "../connection/connection";

export class ProductService {
  getAllProducts = async (): Promise<any> => {
    const allProducts = await Produto.find();
    return allProducts;
  };

  getProductByID = async (id: string): Promise<any> => {
    const produtos = await Produto.find();
    const produto = produtos.filter( produto => produto.id == id ? produto : null );
    return produto;
  };
};