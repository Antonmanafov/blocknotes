import { sagaAddBlocknote } from "../../redux/actions/actions"
import { useDispatch } from "react-redux"
import { fetchCreator } from "../fetchCreator"


export default function FormBlocknotes() {

  const dispatch = useDispatch()

  async function newBlocknote (e) {
    e.preventDefault()
    const name = e.target.name.value
    const about = e.target.about.value
    dispatch(sagaAddBlocknote(fetchCreator('/addBlocknote', "POST", {name, about})))
  }

  return (
    <div>
      <form className='addblocknote' method="POST" onSubmit={newBlocknote} >
        <input required minLength='3' type="text" name="name" placeholder="Название блокнота" />
        <textarea required minLength='3' type="text" name="about" placeholder="Небольшое описание блокнота" />
        <button className="addBut" >Создать</button>
      </form>
    </div>
  )
}
// &#10004;
