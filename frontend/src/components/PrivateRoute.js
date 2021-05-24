import{Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function PrivateRoute({children, ...rest}) {

  const isAuth = useSelector(state => state.isAuth)

  return <Route {...rest} >
     
      {isAuth ?
      children :
      <Redirect to="/login" />}

  </Route>
}
