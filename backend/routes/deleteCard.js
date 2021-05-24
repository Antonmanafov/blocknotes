import express from 'express'
import User from '../models/user.js'

const router = express.Router()

router.delete('/', async (req, res) => {

  const {id, pageId} = await req.body

  const user = await User.findById(req.session.user._id)
  user.blocknotes = await user.blocknotes.map(bl => bl.id != pageId ? bl : {
    ...bl,
    cards: bl.cards.filter(card => card.id !== id)
  })

  user.cards = await user.cards.filter(card => card.id !== id)

  await user.save()
  res.json({blocknotes: user.blocknotes.find(bl => bl.id === pageId), cards: user.cards})
})



export default router
