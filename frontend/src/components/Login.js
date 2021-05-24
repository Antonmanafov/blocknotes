import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loader3 from "./Loader3"
import { sagaAuthenticated } from "../redux/actions/actions"


export default function Login() {

  const loadStatus = useSelector((store) => store.loading)

  const [status, setStatus] = useState(false)
  const dispatch = useDispatch()

async function auth(e) {
  e.preventDefault()
    dispatch(sagaAuthenticated({event: e, setStatus}))
}

  return !loadStatus ?(
    <div className="middleOfScreen" >
      <form className="loginform" action="" method="POST" id="regform" onSubmit={auth} >
        <input required minLength="1" name="email" type="email" placeholder="email" className="reginput" />
        <input required minLength="6" type='password' name="password"placeholder="password" className="reginput"/>
        <button type="submit"> Войти </button>
    </form>
    {status ? 
    <div>Вы ввели неверные данные!</div> : null }
  </div>
  ) : 
  <div className="forloadincabinet" >
  <div className="loadmypage" >
    <Loader3 />
    </div>
    </div>
}
