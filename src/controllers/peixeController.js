const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const peixeController = {
  // Criar peixe
  criar: async (req, res) => {
    try {
      const { nome, especie, dataNascimento, tamanhoAquario, usuarioId } =
        req.body;
      const peixe = await prisma.peixe.create({
        data: {
          nome,
          especie,
          dataNascimento: dataNascimento ? new Date(dataNascimento) : null,
          tamanhoAquario,
          usuarioId: parseInt(usuarioId),
        },
      });
      res.status(201).json(peixe);
    } catch (error) {
      res.status(400).json({ error: "Erro ao criar peixe: " + error.message });
    }
  },

  // Listar peixes
  listar: async (req, res) => {
    try {
      const peixes = await prisma.peixe.findMany({
        include: {
          usuario: true,
        },
      });
      res.json(peixes);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar peixes" });
    }
  },

  // Remover peixe
  remover: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.peixe.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      res
        .status(400)
        .json({ error: "Erro ao deletar peixe: " + error.message });
    }
  },
};

module.exports = peixeController;
