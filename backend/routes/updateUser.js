import express from 'express'
const router = express.Router()
import User from '../models/user.js'


router.post('/', async (req, res) => {
  const {username, firstname, lastname, age, aboutMe, id} = req.body
  await User.findByIdAndUpdate({_id: id}, {$set: {
    username:username, firstname:firstname, lastname:lastname, age:age, aboutMe:aboutMe
  }})
  const user = await User.findById(id)
  res.json(user)
})

export default router
