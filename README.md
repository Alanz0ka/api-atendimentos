Controle de Atendimentos

Este projeto é uma API RESTful desenvolvida em Node.js com Express.js para gerenciar os atendimentos de uma empresa. Ele oferece operações básicas de CRUD (Create, Read, Update, Delete) para os atendimentos e se integra a um banco de dados MySQL para armazenamento e recuperação de dados.

Funcionalidades

- Cadastro de novos atendimentos
- Listagem de todos os atendimentos
- Atualização de informações de atendimentos existentes
- Exclusão de atendimentos

A API segue os princípios do estilo arquitetural REST (Representational State Transfer), utilizando métodos HTTP para realizar operações nos recursos. Ela retorna respostas em formato JSON para facilitar a integração com clientes front-end e outras aplicações.

Banco de Dados

A API se integra a um banco de dados MySQL para armazenar e recuperar os dados dos atendimentos. O esquema do banco de dados inclui uma tabela chamada atendimentos com colunas para armazenar informações como data, serviço, cliente e status do atendimento.

Pré-requisitos

- Node.js instalado
- MySQL Server instalado e configurado
- Conexão com a internet para instalação de dependências via npm

Instalação

1. Clone o repositório para o seu ambiente local:

git clone https://github.com/Alanz0ka/api-atendimentos.git

2. Navegue até o diretório do projeto:

cd api-atendimentos

3. Instale as dependências do projeto:

npm install

Configuração do Banco de Dados

1. Certifique-se de ter um servidor MySQL em execução em sua máquina.

2. Crie um banco de dados chamado controle_atendimento:

CREATE DATABASE controle_atendimento;

3. Certifique-se de que a conexão com o banco de dados está configurada corretamente em infraestrutura/conexão.js.

4. Execute o script de criação de tabelas para criar a tabela necessária:

node infraestrutura/tabelas.js

Uso

1. Inicie o servidor Node.js:

npm start

2. O servidor estará disponível em http://localhost:3000.

3. Use um cliente HTTP (como Insomnia ou Postman) para fazer solicitações HTTP para o servidor e gerenciar os atendimentos.

Endpoints API

GET /atendimentos

Retorna uma lista de todos os atendimentos.

POST /atendimentos

Cria um novo atendimento.

PUT /atendimentos/:id

Atualiza um atendimento existente com o ID fornecido.

DELETE /atendimentos/:id

Exclui um atendimento com o ID fornecido.

Contribuindo

Se você deseja contribuir para este projeto, por favor, faça um fork do repositório, faça suas alterações e envie uma solicitação pull. Toda contribuição é bem-vinda!

Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
