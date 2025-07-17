import { Request, Response } from "express";
import { Iusers } from "../interfaces/users.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class UsersControllers{
       createUser = async (req:Request,res:Response):Promise<Response> => {
        const {email} = await req.body
        try {
            if (!email) {
                const newUsers:Iusers = await prisma.user.create({
            data:{
                name:req.body.name,
                email:req.body.email,
                age:req.body.age
            }
        }) 
        return  res.status(201).json(newUsers)
            }    else{
        return  res.status(200).json('usuário cadastrado')

            }
        
        } catch (error) {
            return res.status(500).json('Internal server error')
        }
    }

  getUsers = async (_req: Request, res: Response): Promise<Response> => {
    const users = await prisma.user.findMany()
    return res.status(200).json(users)
  }

    updateUsers =async  (req:Request, res:Response):Promise<Response> => {
        const {id} = req.params
        try {
            const userUpd = await prisma.user.findUnique({where:{id}})
            if (userUpd) {
                
        const updateUser = await prisma.user.update({
            where:{id},
           data:{
                name:req.body.name,
                email:req.body.email,
                age:req.body.age
            }
        })
        
       return res.status(200).json(updateUser)
            }
            else{
                return res.status(404).json('Usuário não encontrado')
            }
        } catch (error) {
                return res.status(500).json('Erro no servidor')
            
        }
    }


    deleteUser = async(req:Request, res:Response):Promise<Response> => {
        const {id} = req.params
        try {
          const idUser = await prisma.user.findUnique({where:{id}})
          if (!idUser) {
            
              return res.status(404).json("usuário não encontrado")
          }
          await prisma.user.delete({ where: { id } });
          return res.status(201).json(idUser)
          
          
        } catch (error) {
               console.error(error);
            return res.status(500).json({ error: "Erro interno no servidor." }); 
        }
    }
}