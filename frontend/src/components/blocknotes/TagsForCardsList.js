import { useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import {nanoid} from 'nanoid'
import { sagaAddTag, sagaRemoveTag } from "../../redux/actions/actions";
import { fetchCreator } from "../fetchCreator";


export default function TagsForCardsList({info}) {
  const {id} = useParams()
  const dispatch = useDispatch()
  const state = useSelector((store) => store.user.blocknotes.find(bl => bl.id === id).cards.find(card => card.id === info.id))

  async function removeTag(tag) {
    dispatch(sagaRemoveTag(fetchCreator('/addTag', 'DELETE', {cardId: info.id, BlockNoteId: id, tag})))
  }

  async function newTag() {
    let newTag = prompt('add your tag pls', '')
    dispatch(sagaAddTag(fetchCreator('/addTag', 'POST', {cardId: info.id, BlockNoteId: id, tag: newTag})))
  }

  return (
    <div className="tagsBlock" >
    {state.tags.map( tag => {
      return (
        <div className='tag' key={nanoid()} >
          {tag}
          <button onClick={() => removeTag(tag)} className="tagButton">x</button>
        </div>
      )
    })}
    <button className="tagAddButton" onClick={() => newTag()} >+</button>
    </div>
  )
}
