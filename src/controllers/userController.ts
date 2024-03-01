import { Request, Response } from "express";
import { UserService } from "../services/userService";
const userService = new UserService();

export class UserController{

  getAllUsers = (req: Request, res: Response) => {
    try{
      const allUsers = userService.getAllUsers();
      res.json(allUsers).status(200);
    }catch(error){
      console.log(error);
      res.json({message: "Não foi possivel encontrar os usuários"}).status(404);
    }
  };

  getUserByID = (req: Request, res: Response) => {
    try{
      const id = req.params.id;
      const user = userService.getUserByID(id);
      res.json({user}).status(200);
    }catch{
      res.json({message: "Não foi possivel encontrar o usuário"}).status(404);
    }
  };

  postNewUser = (req: Request, res: Response) => {
    try{
      const newUser = req.body;
      userService.postNewUser(newUser);
      res.json({message: "Usuário criado com sucesso."}).status(200);
    }catch{
      res.json({message: "Infelizmente o usuário não foi criado."});
    };
  };
};