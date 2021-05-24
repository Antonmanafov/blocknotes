import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Loader3 from './Loader3'
import { sagaUpdateUserInfo } from "../redux/actions/actions"

export default function MyCabinet() {

  const dispatch = useDispatch()
  
  const state = useSelector((store) => store.user)
  const loadStatus = useSelector((store) => store.loading)

  const [forEdit, setForEdit] = useState(false)

async function editUserInfo(e) {
  e.preventDefault()
  dispatch(sagaUpdateUserInfo({event: e, setForEdit, id: state._id}))
  setForEdit(false)
}

  return !loadStatus ? (
    <div className="myCabinetPage" >

      <div className="infoBlock" >

        <div className="imgBlock">
          <img style={{height: '400px'}} src={state.avatar} alt=""/>
          <button>Изменить фото</button>
        </div>

        {!forEdit ? 
      
    <div className="persInform">
      <div className="dinamicInf">
        <p>Username: {state.username}</p>
        <p>Имя: {state.firstname}</p>
        <p>Фамилия: {state.lastname}</p>
        <p>Возвраст: {state.age}</p>
        <p>Обо мне: {state.aboutMe}</p>
        <button onClick={() => setForEdit(true)} >Изменить</button>
      </div>
        <div className="staticInf" >
        <p>Количество блокнотов: {state.blocknotes.length}</p>
        <p>Количество заметок: {state.cards.length}</p>
        <p>Персональный ID:{state._id} </p>
        </div>
        </div>
      :
      <form className="formForChange" method="POST" onSubmit={editUserInfo} >
        <input defaultValue={state.username} placeholder="Новый никнейм" name="username" />
        <input defaultValue={state.firstname} placeholder="Новое имя пользователя" name="firstname" />
        <input defaultValue={state.lastname} placeholder="Новая фамилия" name="lastname" />
        <input defaultValue={state.age} type="number" min='15' max='99' placeholder="Твой возраст" name="age" />
        <textarea defaultValue={state.aboutMe} placeholder="Новое описание" name="aboutMe" />
        <button type='submit' style={{ marginTop: '25px'}} >Сохранить</button>
        <button onClick={() => setForEdit(false)} >Отменить</button>
      </form>
        }


        
      </div>

    </div>
  ) 
  : 
  <div className="forloadincabinet" >
  <div className="loadmypage" >
    <Loader3 />
    </div>
    </div>
}


