import express from 'express'
const router = express.Router()
import User from '../models/user.js'
import faker from 'faker'
import {nanoid} from 'nanoid'



router.post('/', async(req, res) => {
  const {id} = await req.body
  const user = await User.findById(req.session.user._id)

  let newItem = {
    id: nanoid(),
    head: "Заголовок",
    text: "Основной текст Вашей заметки",
    tags: []
  }

  user.blocknotes = await user.blocknotes.map(bl => bl.id !== id ? bl : {
    ...bl,
    cards: [...bl.cards, newItem]
  })

  await user.cards.push(newItem)

  await user.save()

  res.json({blocknotes: user.blocknotes.find(bl => bl.id === id), cards: user.cards})
})

export default router
