import express from 'express'
import User from '../models/user.js'


const router = express.Router()

router.put('/', async (req, res) => {
  const {id, pageId, userId, newInfo} = await req.body
  const user = await User.findById(req.session.user._id)
  user.blocknotes = await user.blocknotes.map(bl => bl.id != pageId ? bl : {
    ...bl,
    cards: bl.cards.map(card => card.id !== id ? card : {
      ...card,
      head: newInfo
    })
  })
  user.cards = await user.cards.map(card => card.id !== id ? card : {
    ...card,
    head: newInfo
  })
  
  await user.save()
  res.json({blocknotes: user.blocknotes.find(bl => bl.id === pageId), cards: user.cards})
})



export default router
