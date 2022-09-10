CREATE TABLE
    Estudantes (
        id varchar(255) primary key,
        nome varchar(255) not null,
        email varchar(255) not null unique,
        data_nasc Date not null,
        turma_id varchar(255) not null,
        hobbies varchar(255) not null
    );