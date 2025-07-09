import {Router } from "express";
import { UsersControllers } from "../controllers/userControllers";
import { isUserIdValid } from "../middlewares/isIuser.middleware";

export const routeList = Router()
const usersControllers = new UsersControllers()

routeList.get('/', isUserIdValid.wakupServer,usersControllers.getUsers )
routeList.put('/:id', isUserIdValid.execute, usersControllers.updateUsers )
routeList.delete('/:id', isUserIdValid.execute, usersControllers.deleteUser )
 
routeList.post('/', usersControllers.createUser)