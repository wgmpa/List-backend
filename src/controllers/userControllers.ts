import { Request, Response } from "express";
import { Iusers } from "../interfaces/users.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class UsersControllers{
       createUser = async (req:Request,res:Response):Promise<Response> => {
        const newUsers:Iusers = await prisma.user.create({
            data:{
                name:req.body.name,
                email:req.body.email,
                age:req.body.age
            }
        }) 
        return  res.status(201).json(newUsers)
    }

  getUsers = async (_req: Request, res: Response): Promise<Response> => {
    const users = await prisma.user.findMany()
    return res.status(200).json(users)
  }

    updateUsers =async  (req:Request, res:Response):Promise<Response> => {
        const idUser = req.params.id
        const updateUser = await prisma.user.update({
            where:{id:idUser},
           data:{
                name:req.body.name,
                email:req.body.email,
                age:req.body.age
            }
        })
        
       return res.status(200).json(updateUser)
    }

     deleteUser = async(req:Request, res:Response):Promise<Response> => {
        const idUser = req.params.id
        const delUser = await prisma.user.delete({
            where:{id:idUser},
        
        })
        return res.status(200).json(delUser)
    }
}