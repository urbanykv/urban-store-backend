import { ProductService } from "../services/productServices";
import { Response, Request } from "express";
const productService = new ProductService();


export class ProductController {
  getAllProduct = async (req: Request, res: Response): Promise<any> => {
    try{
      const db = await productService.getAllProduct();
      return res.json(db);
    }catch{
      return res.status(404).json({message: 'Não foi possivel encontrar os dados.'});
    }
  };

  getProduct = async (req: Request, res: Response): Promise<any> => {
    try{
      const id = req.params.id
      const product = await productService.getProduct(id);
      return res.json(product);
    }catch{
      return res.status(404).json({message: 'Não foi possivel encontrar os dados.'});
    }
  }
}