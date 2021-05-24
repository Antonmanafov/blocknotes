import { useSelector } from "react-redux"
import { useParams } from "react-router"
import AddCard from "./AddCard"
import Card from "./Card"

export default function Cardslist() {
  const {id} = useParams()
  const state = useSelector((store) => store.user.blocknotes.find(bl => bl.id === id).cards)

  return (
    (state) ? 
    <div className="bodyOfList" >
      {state.map( card => {
        return <Card key={card.id} info={card} />
      })}
      <AddCard id={id} />
    </div>
   : null
  )
}
