import { ProductService } from "../services/productServices";
import { Response, Request } from "express";
const productService = new ProductService();


export class ProductController {
  getAllProducts = async (req: Request, res: Response): Promise<any> => {
    try{
      const allProducts = await productService.getAllProducts();
      return res.json(allProducts);
    }catch{
      return res.status(404).json({message: 'Não foi possivel encontrar os dados.'});
    };
  };

  getProductByID = async (req: Request, res: Response): Promise<any> => {
    try{
      const id = req.params.id
      const product = await productService.getProductByID(id);
      return res.json(product);
    }catch{
      return res.status(404).json({message: 'Não foi possivel encontrar os dados.'});
    };
  };
};