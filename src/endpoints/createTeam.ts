import { Request, Response } from "express";
import connection from "../connection";

export default async function createTeam(req: Request, res: Response) {

    try {

        const id = Date.now().toString()

        const { nome, id_docentes, id_estudantes, modulo } = req.body

        await connection("Turma").insert({ id, nome, id_docentes, id_estudantes, modulo })

        res.status(201). send("Team created!")

    } catch (error:any) {

        res.status(500).send({error: error})

    }

}