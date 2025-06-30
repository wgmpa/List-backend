import { Request, Response } from "express";
import { Iusers } from "../interfaces/users.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class UsersControllers{
     async  createUser (req:Request,res:Response) {
        const newUsers:Iusers = await prisma.user.create({
            data:{
                name:req.body.name,
                email:req.body.email,
                age:req.body.age
            }
        }) 

          res.status(201).json(newUsers)
    }

    async getUsers (req:Request, res:Response){
        const getUser = await prisma.user.findMany({
            
        }) 
    
        res.status(200).json(getUser)
    }

    async updateUsers (req:Request, res:Response){
        const idUser = req.params.id
        const updateUser = await prisma.user.update({
            where:{
                id:idUser
            },
            data:{
                        name:req.body.name,
                email:req.body.email,
                age:req.body.age
            }
        })
        res.status(200).json(updateUser)
    }

    async deleteUser (req:Request, res:Response){
        const idUser = req.params.id
        const delUser = await prisma.user.delete({
            where:{id:idUser},
        
        })
        res.status(200).json(delUser)
    }

}