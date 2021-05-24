import { Link } from "react-router-dom";
import { useSelector } from "react-redux"


export default function NavigationBar() {

  const state = useSelector((store) => store)

  return (

    <nav className="navigationBar" >
      
      {state.isAuth ?
      <>
      <div className="welcomNav">Добро пожаловать!</div>
      <div className="welcomNav welcomNavUser" >{state.user.username}</div>
      <Link className="linklink" style={{textDecoration: 'none', color: 'white', fontSize: '13pt'}} to='/' >
        <div className= "navButton">
          Главная страница
        </div>
      </Link>        
      {/* <Link className="linklink"  style={{textDecoration: 'none', color: 'white', fontSize: '13pt'}} to='/mycabinet' >
        <div className= "navButton" >
          Личный кабинет 
        </div>
      </Link>   */}
      <Link className="linklink"  style={{textDecoration: 'none', color: 'white', fontSize: '13pt'}} to='/blocknotes' >
        <div className= "navButton" >
          Мои блокноты 
        </div>
      </Link>        
      <Link className="linklink" style={{textDecoration: 'none', color: 'white', fontSize: '13pt'}} to='/allnotes' >
        <div className= "navButton">
          Все мои заметки
        </div>
      </Link>
      <Link className="linklink" style={{textDecoration: 'none', color: 'white', fontSize: '13pt'}} to='/logout' >
        <div className= "navButton">
          Выход
        </div>
      </Link>
      </>
        : 
      <>
      <Link className="linklink" style={{textDecoration: 'none', color: 'white', fontSize: '13pt'}} to='/' >
        <div className= "navButton">
          Главная страница
        </div>
      </Link>        
      <Link className="linklink"  style={{textDecoration: 'none', color: 'white', fontSize: '13pt'}} to='/registration' >
        <div className= "navButton" >
          Регистрация 
        </div>
      </Link>        
      
      <Link className="linklink" style={{textDecoration: 'none', color: 'white', fontSize: '13pt'}} to='/login' >
        <div className= "navButton">
          Авторизация
        </div>
      </Link>        
        </>
        }
    </nav>

  )
}
