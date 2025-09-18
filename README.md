# API TDS - Sistema de Gerenciamento de Aquários

API para gerenciamento de aquários, peixes e equipamentos. Desenvolvida com Node.js, Express e Prisma.

## 🚀 Começando

Estas instruções permitirão que você obtenha uma cópia do projeto em funcionamento em sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL instalado e rodando
- Git

### 🔧 Instalação

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/tds-api.git
cd tds-api
```

2. Instale as dependências

```bash
npm install
```

3. Configure o banco de dados
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione a URL de conexão do MySQL:

```env
DATABASE_URL="mysql://root:sua-senha@localhost:3306/tds_api"
```

4. Execute as migrações do Prisma

```bash
npx prisma db push
```

5. Inicie o servidor

```bash
npm run dev
```

O servidor estará rodando em http://localhost:3000

## 📌 Rotas da API

### Usuários

- **POST /usuarios** - Criar novo usuário

  ```json
  {
    "nome": "João Silva",
    "email": "joao@email.com",
    "senha": "123456"
  }
  ```

- **GET /usuarios** - Listar todos os usuários
- **DELETE /usuarios/:id** - Deletar um usuário

### Peixes

- **POST /peixes** - Criar novo peixe

  ```json
  {
    "nome": "Nemo",
    "especie": "Peixe-palhaço",
    "dataNascimento": "2023-01-01",
    "tamanhoAquario": 100,
    "usuarioId": 1
  }
  ```

- **GET /peixes** - Listar todos os peixes
- **DELETE /peixes/:id** - Deletar um peixe

### Equipamentos

- **POST /equipamentos** - Criar novo equipamento

  ```json
  {
    "nome": "Filtro Externo",
    "tipo": "filtro",
    "marca": "Marca X",
    "potencia": 100,
    "usuarioId": 1
  }
  ```

- **GET /equipamentos** - Listar todos os equipamentos
- **DELETE /equipamentos/:id** - Deletar um equipamento

## 📁 Estrutura do Projeto

```
src/
├── config/
│   ├── middlewares.js     # Configuração de middlewares
│   ├── prisma.js         # Instância do PrismaClient
│   ├── routes.js         # Configuração das rotas
│   ├── server.js         # Configurações do servidor
│   └── server-start.js   # Inicialização do servidor
├── controllers/
│   ├── usuarioController.js
│   ├── peixeController.js
│   └── equipamentoController.js
├── middlewares/
│   └── errorHandler.js    # Tratamento de erros
├── routes/
│   ├── usuarioRoutes.js
│   ├── peixeRoutes.js
│   └── equipamentoRoutes.js
├── utils/
│   └── httpResponse.js    # Helpers para respostas HTTP
└── app.js                # Arquivo principal
```

## 🛠️ Construído com

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [Express](https://expressjs.com/) - Framework web
- [Prisma](https://www.prisma.io/) - ORM
- [MySQL](https://www.mysql.com/) - Banco de dados

## ✨ Funcionalidades

- ✅ CRUD de Usuários
- ✅ CRUD de Peixes
- ✅ CRUD de Equipamentos
- ✅ Validação de dados
- ✅ Tratamento de erros
- ✅ Relacionamentos entre entidades

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
