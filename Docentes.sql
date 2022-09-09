CREATE TABLE Docentes (
	id varchar(255) primary key,
    nome varchar(255) not null,
    email varchar(255) not null,
    data_nasc Date not null,
    turma_id varchar(255) not null,
    especialidades enum("JS", "CSS", "React", "Typescript", "POO" )
    );
    
