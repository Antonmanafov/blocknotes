import express from 'express'
const router = express.Router()
import User from '../models/user.js'


router.post('/', async(req, res) => {
  const {cardId, BlockNoteId, tag} = await req.body
  const user = await User.findById(req.session.user._id)
  user.blocknotes = await user.blocknotes.map(bl => bl.id != BlockNoteId ? bl :
    {
      ...bl,
      cards: bl.cards.map(card => card.id !== cardId ? card : 
        {
        ...card,
        tags: [...card.tags, tag]
      })
    })
    user.cards = user.cards.map(card => card.id !== cardId ? card : {
      ...card,
      tags: [...card.tags, tag]
    })
    await user.save()
    res.json({blocknotes: user.blocknotes.find(bl => bl.id === BlockNoteId), cards: user.cards})
})

router.delete('/', async(req, res) => {
  const {cardId, BlockNoteId, tag} = await req.body
  const user = await User.findById(req.session.user._id)
  user.blocknotes = await user.blocknotes.map(bl => bl.id != BlockNoteId ? bl :
    {
      ...bl,
      cards: bl.cards.map(card => card.id !== cardId ? card : {
        ...card,
        tags: card.tags.filter(tg => tg !== tag)
      })
    })
    user.cards = user.cards.map(card => card.id !== cardId ? card : {
      ...card,
      tags: card.tags.filter(tg => tg !== tag)
    })
    await user.save()
    res.json({blocknotes: user.blocknotes.find(bl => bl.id === BlockNoteId), cards: user.cards})
})


export default router
