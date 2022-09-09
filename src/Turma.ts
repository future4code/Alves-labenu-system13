
export class Turma{
    id: string
    nome: string
    id_docentes: string[]
    id_estudantes: string[]
    modulo: number
    
    constructor(
        id: string,
        nome: string,
        id_docentes: string[],
        id_estudantes: string[],
        modulo: number,
    ){
        this.id = id
        this.nome = nome
        this.id_docentes = id_docentes
        this.id_estudantes = id_estudantes
        this.modulo = modulo
    }
}

export const idTurma = Date.now().toString()