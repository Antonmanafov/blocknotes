import express from 'express'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const router = express.Router()
const saltRounds = 10;


router.post('/', async (req, res) => {
  const {email, password} = await req.body
  const authUser = await User.findOne({ email });
  if (authUser && (await bcrypt.compare(password, authUser.password))) {

    req.session.user = authUser
    res.json({ 
    status: true,
    user: authUser
  })

  } else res.json({status: false})
})

export default router
