import express from 'express'
const router  = express.Router()
import User from '../models/user.js'

router.delete('/', async(req, res) => {
  const {id} = await req.body
  const userForDelete = await User.findById(req.session.user._id)

  const blocknoteIds = userForDelete.blocknotes.find(bl => bl.id === id).cards.map(card => card.id)
  userForDelete.cards = await userForDelete.cards.filter(card => blocknoteIds.indexOf(card.id) === -1) 

  userForDelete.blocknotes = await userForDelete.blocknotes.filter(bl => bl.id !== id)
  await userForDelete.save()
      res.json({blocknotes: userForDelete.blocknotes, cards: userForDelete.cards})
  
})


export default router
