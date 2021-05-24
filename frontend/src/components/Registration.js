import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sagaRegistration } from "../redux/actions/actions"
import Loader3 from './Loader3'

export default function Registration() {

  const dispatch = useDispatch()

  const [status, setStatus] = useState(false)
  
  const loadStatus = useSelector(store => store.loading)

async function registration(e) {
  dispatch(sagaRegistration({event:e, setStatus}))
}

  return !loadStatus ? (
    <div className="middleOfScreen" >
      <form action="" method="POST" id="regform" onSubmit={registration} >
        <input required minLength="6" type="text" name="username" placeholder="name" className="reginput"/>
        <input required minLength="1" name="email" type="email" placeholder="email" className="reginput" />
        <input required minLength="6"  name="password" type="password" placeholder="password" className="reginput"/>
        <button type="submit"> Зарегистрироваться </button>
    </form>
    {status ? 
    <div>Такой пользователь уже существует!</div> : null }
  </div>
  ) : 
  <div className="forloadincabinet" >
  <div className="loadmypage" > 
  <Loader3 />
  </div>
  </div>
}
