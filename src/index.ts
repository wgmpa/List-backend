import express, { json, Request, Response }  from "express";
import {PrismaClient} from '@prisma/client'
import { routeList } from "./Routes/routes";

const app = express()
const port = 3000;
const prisma = new PrismaClient()
app.use(json())
app.use('/usuarios',routeList)
 

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
})

