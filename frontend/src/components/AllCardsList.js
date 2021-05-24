import {  useState } from "react"
import { useSelector } from "react-redux"
import Loader3 from './Loader3'

export default function AllCardsList() {

const state = useSelector((store) => store.user.cards)
const [cardsList, setCardList] = useState(state)
const [loading, setLoading] = useState(true)

async function changeTextForFind(e) {
  let text = await e.target.value
  let newList = await state.filter(card => card.text.indexOf(text) !== -1)
  setCardList(newList)
}
  setTimeout(() => {
    setLoading(false)
  }, 1000);
  return cardsList && !loading ? (
    
    <div className="textCardsPage" >
      <input onChange={changeTextForFind} className="findInp" placeholder="Введи текст для поиска" name="forFind"  />
      <div className="cardsContainer" >
      {cardsList.map(card => {
        return (
         <div className="textCard"  key={card.id} > 
          <div className="textCardHead" >{card.head}</div>
          <div className="textCardBody" >{card.text}</div>
          </div>
        )
      })}
      </div>
    </div>
  ) :
  <div className="textCardsPage"  >
    <Loader3 />
  </div>
}
