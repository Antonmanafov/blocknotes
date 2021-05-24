import express from 'express'
const router  = express.Router()
import User from '../models/user.js'

router.put('/', async(req, res) => {
const newinfo = await req.body
const user = await User.findById(req.session.user._id)
user.blocknotes = await user.blocknotes.map(bl => bl.id !== newinfo.id ? bl : {
  ...bl,
  name: newinfo.name,
  about: newinfo.about
})
user.save()
const updatedBlocknote = await user.blocknotes.find(bl => bl.id == newinfo.id)
res.json(updatedBlocknote)
})

export default router
