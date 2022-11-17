const JWT = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config/credentials')

const UserService = require('../services/users.services')

module.exports = async (req, res, next) => {
  try {
    let token = req.headers['authorization']

    const { userId } = req.params

    token = token.split(' ')[1]

    const decoded = JWT.verify(token, JWT_SECRET)

    const userFound = await UserService.getUserById(decoded._id)

    if (!userFound || userFound._id.toString() !== userId) {
      return res.status(400).json({
        message: "You're unauthorized to do this action"
      })
    }

    await next()
  } catch (error) {
    console.log(error)

    res.status(500).json({
      error: 'INTERNAL SERVER ERROR'
    })
  }
}
