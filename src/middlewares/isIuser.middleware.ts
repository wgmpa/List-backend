import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient()

export class isUserIdValid{
    static async execute (req:Request,res:Response, next:NextFunction){
        const idUser = String(req.params.id)
        const getId = await prisma.user.findFirst({where:{id:idUser}})
        if(idUser !==getId?.id){ 
            
        return res.status(404).json({message:"Not found"})
        }
        next()
    }

    static async wakupServer (req:Request, res:Response,next:NextFunction){
        setTimeout(()=>{
            
        },3000)
    next()
    }
    
}