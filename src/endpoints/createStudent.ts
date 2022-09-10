import { Request, Response } from "express";
import connection from "../connection";

export default async function createStudent(req: Request, res: Response) {

    try {

        const id = Date.now().toString()

        const { nome, email, data_nasc, turma_id, hobbies } = req.body

        
        await connection("Estudantes").insert({ id, nome, email, data_nasc, turma_id, hobbies})

        res.status(201). send("Student created!")

    } catch (error:any) {

        res.status(500).send({error: error})

    }

}