import { Usuario } from "../connection/connection";

export class UserService{
  getAllUsers = async (): Promise<any> => {
    const allUsers = await Usuario.find();
    return allUsers;
  };

  getUserByID = async (id: string): Promise<any> => {
    const usuarios = await Usuario.find();
    const user = usuarios.filter( user => user.id == id ? user : null );
    return user;
  };

  postNewUser = async (data: any): Promise<any> => {
    const newUser = new Usuario(data);
    await newUser.save();
  };
};