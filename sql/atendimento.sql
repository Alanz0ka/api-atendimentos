create DATABASE controle_atendimento;

USE controle_atendimento;

CREATE TABLE IF NOT EXISTS atendimentos (
    id int not null auto_increment primary key,
    data date,
    servico varchar(100),
    cliente varchar(100),
    status enum("pendente", "realizado", "cancelado") default "pendente"
);

INSERT into atendimentos(id, data, servico, cliente, status)
values(NULL, "2021-10-16", "corte cabelo", "Ronaldo", "pendente");

INSERT into atendimentos(id, data, servico, cliente, status)
values(NULL, "2021-10-16", "Manicure", "Maria", "pendente");

SELECT * from atendimentos;


