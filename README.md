# Aplicação CRUD com Node.js, Express e Sequelize

## Visão Geral

Esta é uma aplicação CRUD (Create, Read, Update, Delete) simples desenvolvida com Node.js, Express e Sequelize para o gerenciamento de banco de dados MySQL. A aplicação fornece endpoints para o gerenciamento de usuários por meio de uma API RESTful.

## Tecnologias Utilizadas

- **Node.js**: Tempo de execução JavaScript
- **Express**: Framework de aplicação web para Node.js
- **Sequelize**: ORM (Object-Relational Mapping) baseado em Promises para Node.js e MySQL

## Recursos

- **Gerenciamento de Usuários**: Realize operações CRUD nos dados do usuário.
- **API RESTful**: API simples e intuitiva para o gerenciamento de usuários.

## Como Começar

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-nome/seu-repo.git
    ```

2. **Instale as dependências:**

    ```bash
    cd seu-repo
    npm install
    ```

3. **Configure as variáveis de ambiente:**

    Crie um arquivo `.env` na raiz do projeto e adicione as configurações do banco de dados, por exemplo:

    ```
    DB_NAME=crud
    DB_USER=root
    DB_PASSWORD=suasenha
    DB_HOST=localhost
    DB_DIALECT=mysql
    ```

4. **Execute a aplicação:**

    ```bash
    npm start
    ```

    A aplicação estará acessível em [http://localhost:3000](http://localhost:3000).

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request para melhorias.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
