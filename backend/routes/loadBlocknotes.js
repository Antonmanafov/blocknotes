import express from 'express'
const router  = express.Router()
import User from '../models/user.js'


router.post('/', async(req, res) => {
  const id = await req.body.id
  const userBlocknotes = await User.findById(id)
  res.json(userBlocknotes)
})


export default router
