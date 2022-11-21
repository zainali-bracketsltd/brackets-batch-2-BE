// const  cryptoRandomString from 'crypto-random-string'

const { v4: uuidv4 } = require('uuid')

// importing packages
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config/credentials')

// importing services
const UserService = require('../services/users.services')

const signup = async (req, res) => {
  try {
    // REAL WORK

    const user = req.body

    const userExists = await UserService.getUserExistance({
      email: user.email,
      userName: user.userName
    })

    if (userExists) {
      return res.status(409).json({
        message: 'User already exists with email or user name.'
      })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password, salt)

    user['password'] = hashedPassword

    const createdUser = await UserService.createUser(user)

    console.log('*** user created ***\n', createdUser)

    res.status(200).json({
      message: 'SUCESS: user created.',
      createdUser
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ error: 'INTERNAL SERVER ERROR' })
  }
}

const login = async (req, res) => {
  try {
    const { userName, password, email } = req.body

    const user = await UserService.getUserExistance({ email, userName })

    if (!user) {
      return res.status(401).json({
        message: 'Incorrect credentails.'
      })
    }

    const passwordMatched = await bcrypt.compare(password, user.password)

    if (!passwordMatched) {
      return res.status(401).json({
        message: 'Incorrect credentails.'
      })
    }

    const uniqueKey = uuidv4()

    console.log({ uniqueKey })

    const payload = {
      _id: user._id,
      email: user.email,
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      uniqueKey
    }

    const token = JWT.sign(payload, JWT_SECRET, {
      expiresIn: '24h'
    })

    await UserService.updateUser({
      userId: user._id,
      dataToUpdate: { $addToSet: { uniqueKeys: uniqueKey } }
    })

    res.status(200).json({
      message: 'SUCCESS: logged in.',
      token
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ error: 'INTERNAL SERVER ERROR' })
  }
}

const updateUser = async (req, res) => {
  try {
    // update user here
    const { userId } = req.params

    const dataToUpdate = req.body

    const updatedUser = await UserService.updateUser({ userId, dataToUpdate })

    res.status(200).json({
      message: 'SUCCESS: user updated.',
      updatedUser
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ error: 'INTERNAL SERVER ERROR' })
  }
}

const uploadProfileImage = async (req, res) => {
  try {
    const { fileName } = req

    const { userId } = req.params

    const dataToUpdate = {
      profilePath: `uploads/${fileName}`
    }

    const updatedUser = await UserService.updateUser({
      userId,
      dataToUpdate
    })

    res.status(200).json({
      message: 'SUCCESS: image uploaded',
      updatedUser
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ error: 'INTERNAL SERVER ERROR' })
  }
}

const logout = async (req, res) => {
  try {
    const user = req.user

    user.uniqueKey

    const userFound = await UserService.getUserById(user._id)

    const uniqueKeys = userFound.uniqueKeys.filter(
      key => user.uniqueKey !== key
    )

    await UserService.updateUser({
      userId: user._id,
      dataToUpdate: { uniqueKeys }
    })

    res.status(200).json({
      message: 'SUCCESS logged out!'
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({ error: 'INTERNAL SERVER ERROR' })
  }
}

module.exports = { signup, login, updateUser, uploadProfileImage, logout }
