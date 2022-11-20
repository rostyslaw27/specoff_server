const Client = require('~/models/client')

const clientService = {
  createClient: async (firstName, lastName, email, status) => {
    const newClient = await Client.create({
      firstName,
      lastName,
      email,
      status,
    })

    return newClient
  },
  getClients: async () => {
    const clients = await Client.find().lean().exec()

    return clients.map(({ _id, firstName, lastName, email, status }) => ({
      id: _id,
      firstName,
      lastName,
      email,
      status,
    }))
  },

  getClient: async (clientId) => {
    const client = await Client.findOne({
      _id: clientId,
    })
      .lean()
      .exec()

    const { _id: id, firstName, lastName, email } = client
    return { id, firstName, lastName, email }
  },
}

module.exports = clientService
