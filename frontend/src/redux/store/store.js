  import {createStore, applyMiddleware} from 'redux'
  import {composeWithDevTools} from 'redux-devtools-extension'
  import notesReducer from '../reducers/notesReducer';  
  import reduxThunk from 'redux-thunk'
  import createSagaMiddleware from 'redux-saga'
  import {all} from 'redux-saga/effects'
  import blocknotesSaga from '../blocknotes-saga'
  import usersSaga from '../users-saga'

  const preloadedState = window.localStorage.getItem('state') || '{"isAuth": false, "user":{}, "loading": false}';

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(notesReducer, JSON.parse(preloadedState), composeWithDevTools(
    applyMiddleware(
      reduxThunk,
      sagaMiddleware 
    )
  ))

  sagaMiddleware.run(
    function* () {
      yield all (
        [
          blocknotesSaga(),
          usersSaga()
        ]
      )
    }
 )
  export default store
  