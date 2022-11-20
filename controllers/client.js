const clientService = require('~/services/client')

const getClients = async (_req, res) => {
  const clients = await clientService.getClients()

  res.status(200).json(clients)
}

const getClient = async (req, res) => {
  const { clientId } = req.params

  const client = await clientService.getClient(clientId)

  res.status(200).json(client)
}

module.exports = {
  getClients,
  getClient
}
