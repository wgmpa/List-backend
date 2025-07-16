import { NextFunction, Request, Response } from "express";
import { AppErrors } from "./errors";

export class HandleErros{
    static execute(err:Error, req:Request, res:Response, next:NextFunction){
        if(err instanceof AppErrors){
            return res.status(err.statusCode).json({error:err.message})
        }else{
            return res.status(500).json({error:"Internal server error"})
        }
    }
}