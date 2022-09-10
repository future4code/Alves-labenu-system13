import app from "./app";
import { Turma, idTurma } from "./Turma";
import  Estudantes  from "./Estudantes";
import createTeam from "./endpoints/createTeam"
import { BaseDatabase } from "./data/BaseDataBase";
import createStudent from "./endpoints/createStudent"


app.post("/criarTurma", createTeam)

const turma = new Turma(idTurma, "Turma Alves", ["52454235432"], ["5432522353", "56436436436"], 1 )
const estudantes = new Estudantes()

console.log(turma)

//endpoints de estudantes - Ayrton
app.post('/createStudent',createStudent)








app.get("/showTables", async (req, res)=>{const base = new BaseDatabase() 
  const show = await base.getConnection().raw(`SHOW TABLES`)

  res.send(show)
}
)