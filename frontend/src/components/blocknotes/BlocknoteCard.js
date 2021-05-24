import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sagaDeleteBlocknote, sagaEditBlocknote } from '../../redux/actions/actions';
import { fetchCreator } from '../fetchCreator';


export default function BlocknoteCard({id}) {

  const state = useSelector((store) => store.user.blocknotes.find(bl => bl.id === id))
  const dispatch = useDispatch()

  const [forEdit, setForEdit] = useState(true)

  async function deleteThisBlocknote() {
    dispatch(sagaDeleteBlocknote(fetchCreator('/deleteBlocknote', 'DELETE', {id: id})))
  }

  async function editAbout(e) {
    e.preventDefault()
    const name = e.target.name.value
    const about = e.target.about.value
    dispatch(sagaEditBlocknote(fetchCreator('/editBlocknote', 'PUT', {id, name, about})))
    setForEdit(!forEdit)
  }

  return (
    <div className="oneFullCard" >
    <div className="BlocknoteCard">
    <Link style={{textDecoration: 'none', color: 'black'}} to={`/blocknotes/${state.id}`}> 
      <div>
        <img className="cardimg" src={state.img} alt='' />
      </div>
      </Link>
       {(forEdit) ?
       <>
        <div className="cardName" >
          {state.name}
        </div>
        <div className="cardAbout">
          {state.about}
        </div>
        </> : 
        <form className="editForm" onSubmit={editAbout} >
          <input  name='name' defaultValue={state.name} />
          <input  name='about' defaultValue={state.about} />
          <button type='submit' style={{backgroundColor: 'blue', color: 'white'}} >Внести изменения</button>
        </form>
        }
      </div>
        <div className="blocknoteCardButtonsBlock">
        <button className="blocknoteCardButton" onClick={() => deleteThisBlocknote()}> Удалить блокнот </button>
        <button className="blocknoteCardButton" onClick={() => setForEdit(!forEdit)}> Изменить описание </button>
        </div>
    </div>
  )
}
