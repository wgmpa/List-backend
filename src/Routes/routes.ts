import { PrismaClient } from "@prisma/client";
import { Response, Request,Router } from "express";
import { UsersControllers } from "../controllers/userControllers";

const prisma = new PrismaClient()
export const routeList = Router()
const usersControllers = new UsersControllers()

routeList.get('/', usersControllers.getUsers )
routeList.put('/:id', usersControllers.updateUsers )
routeList.delete('/:id', usersControllers.deleteUser )


routeList.post('/', usersControllers.createUser )