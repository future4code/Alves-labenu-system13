
enum Especialidades {
    JS = "JAVASCRIPT",
    CSS = "CSS",
    REACT = "REACT",
    TYPESCRIPT = "TYPESCRIPT",
    POO = "PROGRAMAÇÃO ORIENTADA A OBJETOS"
}



export type Docentes = {
    id: string,
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: string,
    especialidades: Especialidades
}

export type Estudantes = {
    id: string,
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id:string,
    hobbies: string[]
}