const prisma = require("../config/prisma");
const httpResponse = require("../utils/httpResponse");

const usuarioController = {
  criar: async (req, res, next) => {
    try {
      const { nome, email, senha } = req.body;
      const usuario = await prisma.usuario.create({
        data: { nome, email, senha },
      });
      return httpResponse.created(res, usuario);
    } catch (error) {
      next(error);
    }
  },

  listar: async (req, res, next) => {
    try {
      const usuarios = await prisma.usuario.findMany({
        include: {
          peixes: true,
          equipamentos: true,
        },
      });
      return httpResponse.success(res, usuarios);
    } catch (error) {
      next(error);
    }
  },

  remover: async (req, res, next) => {
    try {
      const { id } = req.params;
      await prisma.usuario.delete({
        where: { id: parseInt(id) },
      });
      return httpResponse.noContent(res);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = usuarioController;
