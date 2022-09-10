// import {Request, Response} from 'express';
// import { EstudantesData } from './data/EstudantesData';

// class Estudantes{

//   async create(req: Request, res: Response){
//     try{
//     const {nome,email,data_nasc,turma_id}=req.body

//     if (!nome || !email || !data_nasc || !turma_id){
//       throw new Error("Faltam dados")
//     }

//     const studentData = new EstudantesData()
        

//      const searchEmail = await studentData.searchStudent(email)

//      if(searchEmail){
//       throw new Error("Usuário já cadastrado")
//      }
//     }
//      catch (err: any){
//       res.send({message: err.message})
//      }

//   }



// }
// export default Estudantes