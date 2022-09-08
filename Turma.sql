CREATE TABLE Turma (
	id varchar(255) primary key,
    nome varchar(255) not null,
    id_docentes varchar(255) not null,
    id_estudantes varchar(255) not null,
    modulo int(1) not null,
    FOREIGN KEY (id_docentes) references Docentes(id),
    FOREIGN KEY (id_estudantes) references Estudantes(id)
);

SET SQL_SAFE_UPDATES = 0;



