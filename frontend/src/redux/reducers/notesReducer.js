import { CHANGE_BLOCKNOTESLIST,SAGAAUTHENTICATED, AUTHENTICATED, DELETE_BLOCKNOTE, EDIT_BLOCKNOTE, LOGOUT, UPDATE_BLOCKNOTE_AND_CARDS, UPDATE_USERINFO, LOADING, SAGALOGOUT, SAGAREGISTRATION, SAGA_UPDATE_USERINFO } from "../actions/actionstypes"

const notesReducer = (state, action) => {
  
  switch (action.type) {

    case LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }

    case SAGA_UPDATE_USERINFO: {
      return {
        ...state,
        loading: true
      }
    }

    case SAGAREGISTRATION: {
      return {
        ...state,
        loading: true
      }
    }

    case SAGAAUTHENTICATED: {
      return {
        ...state,
        loading: true
      }
    }

    case SAGALOGOUT: {
      return {
        ...state,
        loading: true
      }
    }

    case UPDATE_USERINFO:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          age: action.payload.age,
          aboutMe: action.payload.aboutMe,
        },
        loading: false
      }

    case UPDATE_BLOCKNOTE_AND_CARDS: 
    return {
      ...state,
      user: {
        ...state.user,
        cards: action.payload.cards,
        blocknotes: state.user.blocknotes.map(bl => bl.id !== action.payload.blocknotes.id ? bl : action.payload.blocknotes)
      }
    }

    case LOGOUT :
      return {
        isAuth: false,
        user: null,
        loading: false
      }

    case AUTHENTICATED:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload.user
      }

    case CHANGE_BLOCKNOTESLIST: 
  return {
    ...state,
    user: {
      ...state.user,
      blocknotes: action.payload.blocknotes,
      cards: action.payload.cards
    }
  }

  case DELETE_BLOCKNOTE:
    return {
      ...state,
      user: {
        ...state.user,
        blocknotes: action.payload.blocknotes,
        cards: action.payload.cards
      }
    }

  
    case EDIT_BLOCKNOTE:
      return {
        ...state,
        user: {
          ...state.user,
          blocknotes: state.user.blocknotes.map(bl => bl.id !== action.payload.id ? bl : action.payload)
        }
      }
  
  default:
    return state
  }
}

export default notesReducer
