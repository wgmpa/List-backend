import express, { json, Request, Response }  from "express";
import { routeList } from "./Routes/routes";
import { HandleErros } from "./errors/handleErros.middlewares";

const app = express()
const port = 3000;

app.use(json())
app.use('/usuarios',routeList)
app.use(HandleErros.execute)
 
app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
})