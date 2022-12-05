const validateData = (schema, objectType) => {
  return async (req, res, next) => {
    try {
      const data = req[objectType]

      await schema.validateAsync(data, { abortEarly: false })

      next()
    } catch (error) {
      const errors = {}

      error.details.forEach(error => {
        errors[error.path[0]] = error.message
      })

      res.status(500).json(errors)
    }
  }
}

module.exports = { validateData }
