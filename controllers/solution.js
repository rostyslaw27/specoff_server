const solutionService = require('~/services/solution')

const getSolutions = async (_req, res) => {
  const solutions = await solutionService.getSolutions()

  res.status(200).json(solutions)
}

const createSolution = async (req, res) => {
  const { specialist_id, client_id, client_name, theme, text } = req.body

  const solution = await solutionService.createSolution(specialist_id, client_id, client_name, theme, text)

  res.status(200).json(solution)
}

module.exports = {
  getSolutions,
  createSolution,
}
