# Blog API

## Descrição do Projeto

Este projeto consiste no desenvolvimento de uma API em Node.js utilizando o pacote sequelize para realizar operações CRUD em posts de um blog. A aplicação também inclui a implementação de autenticação de usuários e a associação entre usuários, posts e categorias.

## Funcionalidades

1. Endpoints RESTful:
    Implementação de endpoints para realizar operações CRUD em posts.

2. Autenticação de Usuários:
    A criação de posts requer autenticação do usuário.

3. Relação entre Usuário e Post:
    Estabelecimento de uma relação entre usuários e posts, garantindo que cada post seja associado a um usuário específico.

4. Relação entre Post e Categoria:
    Utilização de categorias para classificar os posts, estabelecendo uma relação entre posts e categorias. Cada post pode pertencer a uma ou mais categorias.

## Configuração do Projeto

1. Instalação de Dependências:
    Execute npm install para instalar as dependências necessárias.

2. Configuração do Banco de Dados:
    Configure as informações de conexão com o banco de dados no arquivo config/database.js.

3. Execução da Aplicação:
    Execute npm start para iniciar a aplicação.

## Endpoints

- POST /api/posts: Cria um novo post (requer autenticação).
- GET /api/posts: Obtém a lista de todos os posts.
- GET /api/posts/:id: Obtém detalhes de um post específico.
- PUT /api/posts/:id: Atualiza um post existente (requer autenticação).
- DELETE /api/posts/:id: Exclui um post existente (requer autenticação).

## Autenticação

- POST /api/login: Realiza o login do usuário.

## Modelagem de Dados

1. Usuário (User):
    - ID
    - Nome de Usuário
    - Senha (criptografada)

2. Post:
    - ID
    - Título
    - Conteúdo
    - Data de Criação
    - ID do Usuário (Chave Estrangeira)
    - Categoria (Chave Estrangeira)

3. Categoria:
    - ID
    - Nome

## Relacionamentos

    1. Um usuário pode ter vários posts.
    2. Um post pertence a um usuário.
    3. Um post pode ter várias categorias.
    4. Uma categoria pode ter vários posts.

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Se encontrar problemas ou tiver sugestões, por favor, abra uma issue.

Desenvolvido por Rafael Guedes