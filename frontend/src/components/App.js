import {BrowserRouter, Switch, Route} from 'react-router-dom'
import store from '../redux/store/store'
import NavigationBar from './NavigationBar'
import PageBlocknotes from './blocknotes/PageBlocknotes'
import Cardslist from './blocknotes/Cardslist'
import '../style.css'
import'../loader3.css'
import AllCardsList from './AllCardsList'
import PrivateRoute from './PrivateRoute'
import NoPrivateRoute from './NoPrivateRoute'
import Login from './Login'
import Registration from './Registration'
import Logout from './Logout'
import MyCabinet from './MyCabinet'
import {Provider} from 'react-redux'
import Mainpage from './Mainpage'

function App() {

  return (
    <Provider store={store}>

      <BrowserRouter>
        <div style={{width: '100%', minHeight: '100vh', display: "flex", flexDirection: 'row'}} >
    
          <NavigationBar />
          <Switch>
          <PrivateRoute path="/blocknotes/:id">
            <Cardslist />
          </PrivateRoute>
          <Route exact path="/" >
          <Mainpage />
          </Route>
          <PrivateRoute exact path="/blocknotes" >
            <PageBlocknotes />
          </PrivateRoute>
          <PrivateRoute exact path="/mycabinet" >
            <MyCabinet />
          </PrivateRoute>
          <PrivateRoute exact path="/allnotes" >
            <AllCardsList />
          </PrivateRoute>
          <NoPrivateRoute path='/login' >
            <Login />
          </NoPrivateRoute>
          <NoPrivateRoute path='/registration' >
            <Registration />
          </NoPrivateRoute>
          <PrivateRoute path='/logout' >
            <Logout />
          </PrivateRoute>          
          </Switch>
        </div>
      </BrowserRouter>

    </Provider> 
  )
}

export default App;
