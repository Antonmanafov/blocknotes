import { useDispatch } from "react-redux"
import { sagaAddCard } from "../../redux/actions/actions"
import { fetchCreator } from "../fetchCreator"

export default function AddCard({id}) {
  const dispatch = useDispatch()

  async function addNewCard() {
    dispatch(sagaAddCard(fetchCreator('/addCard', 'POST', {id: id})))
  }

  return (
    <div className="cardBlock forButton" >
    <button className="addButtonRed"  onClick={() => addNewCard()}>+</button>
    </div>
  )
}
