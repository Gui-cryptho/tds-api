function startServer(app, config) {
  app.listen(config.port, () => {
    console.log(`Servidor rodando em http://localhost:${config.port}`);
    console.log(`
          Rotas disponíveis:
          
          Usuários:
          POST   /usuarios     - Criar novo usuário
          GET    /usuarios     - Listar todos os usuários
          DELETE /usuarios/:id - Deletar um usuário
          
          Peixes:
          POST   /peixes      - Criar novo peixe
          GET    /peixes      - Listar todos os peixes
          DELETE /peixes/:id  - Deletar um peixe
          
          Equipamentos:
          POST   /equipamentos    - Criar novo equipamento
          GET    /equipamentos    - Listar todos os equipamentos
          DELETE /equipamentos/:id - Deletar um equipamento
        `);
  });
}

module.exports = startServer;
