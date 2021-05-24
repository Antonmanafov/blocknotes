import express from 'express'
const router = express.Router()
import User from './models/user.js'


router.post('/', async (req, res) => {
  const {id, username, firstname, lastname, age, aboutMe} = await req.body
  await User.findByIdAndUpdate({ _id: id },
    {$set: { username: username, firstname: firstname, lastname: lastname, age: age, aboutMe: aboutMe }});
    const newInfo = await User.findById(id)
    req.session.user = newInfo
    res.json(newInfo)
  })

  export default router
