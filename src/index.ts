import app from "./app";
import { Turma, idTurma } from "./Turma";
import { Docentes } from "./types";
import createTeam from "./endpoints/createTeam"

app.post("/criarTurma", createTeam)

const turma = new Turma(idTurma, "Turma Alves", ["52454235432"], ["5432522353", "56436436436"], 1 )

console.log(turma)
