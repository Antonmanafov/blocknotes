import express from 'express'
const router = express.Router()
import User from '../models/user.js'
import bcrypt from 'bcrypt'
const saltRounds = 10;


router.post('/', async (req, res) => {
  const {username, email, password} = req.body
  const checkbase = await User.findOne({email: email})
  if (checkbase) {
    res.json({status: false})
  } else {
    const newUser = await User.create({
    username,
    email,
    password: await bcrypt.hash(password, saltRounds),
  })
  req.session.user = newUser
  res.json({
    status: true,
    user: req.session.user
  })
  }
  
})

export default router
