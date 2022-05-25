const router = require('express').Router();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const bcrypt = require('bcrypt')
const salt = 10

// const { generateToken, verifyToken } = require('../auth/user.auth')
const { verifyToken } = require('../auth/user.auth')

const { userSignUp, userLogin, userLogout } = require('../controller/auth.controller')

router.post('/user', userSignUp
  // async (req, res) => {
  //   const { name, email, password } = req.body
  //   try {
  //     const hashedPassword = await bcrypt.hash(password, salt)

  //     const user = await prisma.user.create({
  //       data: {
  //         name,
  //         email,
  //         password: hashedPassword
  //       }
  //     })
  //       const token = generateToken(user.id)
  //       res.cookie('authToken', token)
  //     res.status(201).json({ status: "created", user })

  //   } catch (err) {
  //     // console.err('there is something err')
  //     res.status(500).json({ status: "internal server error", error: err.message })
  //   }
  // }
);


// Login
router.get('/user', userLogin
  // async (req, res) => {
  //   const { email, password } = req.body
  //   // console.log(password)
  //   try {
  //     const user = await prisma.user.findUnique({
  //       where: {
  //         email
  //       }
  //     })
  //     console.log(user)
  //     const isPasswordMatched = await bcrypt.compare(password, user.password)
  //     console.log(isPasswordMatched)
  //     if (isPasswordMatched) {
  //       const token = generateToken(user.id)
  //       res.cookie('authToken', token)
  //       res.send({ logingStatus: "success" })
  //     }
  //   } catch (err) {
  //     res.status(500).json({ logingStatus: 'internal server error', error: err.message })
  //   }
  // }
)

// logout
router.get('/user/logout', verifyToken, userLogout
  // (req, res) => {
  //   res.clearCookie("authToken").send({ statuslogout: 'success' })
  // }
)

module.exports = router;
