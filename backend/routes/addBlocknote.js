import express from 'express'
const router  = express.Router()
import User from '../models/user.js'
import faker from 'faker'
import {nanoid} from 'nanoid'

router.post('/', async(req, res) => {
  const {name, about} = await req.body
  const userForAdd = await User.findById(req.session.user._id)
  await userForAdd.blocknotes.push({
    id: nanoid(),
    name,
    about,
    img: faker.image.animals(640, 480, true),
    cards: [],
    tags: []
  })
  await userForAdd.save()
  res.json({blocknotes: userForAdd.blocknotes, cards: userForAdd.cards})
})


export default router
