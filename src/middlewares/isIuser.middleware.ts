import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { AppErrors } from "../errors/errors";

const prisma = new PrismaClient()

export class isUserIdValid{
    static async execute (req:Request,res:Response, next:NextFunction){
        const idUser = String(req.params.id)
        const getId = await prisma.user.findFirst({where:{id:idUser}})
        if(idUser === getId?.id){ 
            
        
        throw new AppErrors(404,"Not found")
        }
        next()
    }

    

    static async wakupServer (req:Request, res:Response,next:NextFunction){
        setTimeout(()=>{
            
        },3000)
    next()
    }
    
}