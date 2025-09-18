const httpResponse = {
  success: (res, data, status = 200) => {
    return res.status(status).json(data);
  },

  created: (res, data) => {
    return res.status(201).json(data);
  },

  noContent: (res) => {
    return res.status(204).send();
  },

  badRequest: (res, message) => {
    return res.status(400).json({ error: message });
  },

  notFound: (res, message = "Registro não encontrado") => {
    return res.status(404).json({ error: message });
  },

  serverError: (res, message = "Erro interno do servidor") => {
    return res.status(500).json({ error: message });
  },
};

module.exports = httpResponse;
