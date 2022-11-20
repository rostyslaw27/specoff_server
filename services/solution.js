const Solution = require('~/models/solution')

const solutionService = {
  createSolution: async (specialist_id, client_id, client_name, theme, text) => {
    const newSolution = await Solution.create({
      specialist_id,
      client_id,
      client_name,
      theme,
      text,
    })

    return newSolution
  },
  getSolutions: async () => {
    const solutions = await Solution.find().lean().exec()

    return solutions.map(({ _id, specialist_id, client_id, client_name, theme, text }) => ({
      id: _id,
      specialist_id,
      client_id,
      client_name,
      theme,
      text,
    }))
  },
}

module.exports = solutionService
