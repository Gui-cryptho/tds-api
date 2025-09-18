const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const equipamentoController = {
  // Criar equipamento
  criar: async (req, res) => {
    try {
      const { nome, tipo, marca, potencia, usuarioId } = req.body;
      const equipamento = await prisma.equipamento.create({
        data: {
          nome,
          tipo,
          marca,
          potencia,
          usuarioId: parseInt(usuarioId),
        },
      });
      res.status(201).json(equipamento);
    } catch (error) {
      res
        .status(400)
        .json({ error: "Erro ao criar equipamento: " + error.message });
    }
  },

  // Listar equipamentos
  listar: async (req, res) => {
    try {
      const equipamentos = await prisma.equipamento.findMany({
        include: {
          usuario: true,
        },
      });
      res.json(equipamentos);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar equipamentos" });
    }
  },

  // Remover equipamento
  remover: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.equipamento.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      res
        .status(400)
        .json({ error: "Erro ao deletar equipamento: " + error.message });
    }
  },
};

module.exports = equipamentoController;
