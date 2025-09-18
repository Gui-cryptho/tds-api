const errorHandler = (error, req, res, next) => {
  console.error(error);

  if (error.code === "P2002") {
    return res.status(400).json({
      error: "Já existe um registro com este valor único",
    });
  }

  if (error.code === "P2025") {
    return res.status(404).json({
      error: "Registro não encontrado",
    });
  }

  res.status(500).json({
    error: "Erro interno do servidor",
  });
};

module.exports = errorHandler;
