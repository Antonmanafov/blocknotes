import { SAGA_DELETE_CARD, CHANGE_BLOCKNOTESLIST,SAGAAUTHENTICATED, ADD_CARD, AUTHENTICATED, DELETE_BLOCKNOTE, EDIT_BLOCKNOTE, LOGOUT, UPDATE_BLOCKNOTE_AND_CARDS, UPDATE_USERINFO, LOADING, SAGALOGOUT, SAGAREGISTRATION, SAGA_UPDATE_USERINFO, SAGA_CHANGE_BLOCKNOTELIST, SAGA_DELETE_BLOCKNOTE, SAGA_EDIT_BLOCKNOTE, SAGA_ADD_CARD, SAGA_EDIT_CARD_BODY, SAGA_EDIT_CARD_HEAD, SAGA_REMOVE_TAG } from "./actionstypes"


export const changeBlocknotesList = payload => ({
  type: CHANGE_BLOCKNOTESLIST,
  payload
})

export const editBlocknote = payload => ({
  type: EDIT_BLOCKNOTE,
  payload
})


export const deleteBlocknote = payload => ({
  type: DELETE_BLOCKNOTE,
  payload
})

export const addCard = payload => ({ 
  type: ADD_CARD,
  payload
})

export const authenticated = payload => ({
  type: AUTHENTICATED,
  payload,
})

export const logout = () => ({
  type: LOGOUT,
})

export const updateBlocknotesAndCards = payload => ({
  type: UPDATE_BLOCKNOTE_AND_CARDS,
  payload
})

export const updateUserInfo = payload => ({
  type: UPDATE_USERINFO,
  payload
})

export const loading = (payload) => ({
  type: LOADING,
  payload
})

export const sagaAuthenticated = payload => ({
  type: SAGAAUTHENTICATED,
  payload,
})

export const sagalogout = () => ({
  type: SAGALOGOUT
})

export const sagaRegistration = (payload) => ({
  type: SAGAREGISTRATION,
  payload
})

export const sagaUpdateUserInfo = payload => ({
  type: SAGA_UPDATE_USERINFO,
  payload
})

export const sagaAddBlocknote = payload => ({
  type: SAGA_CHANGE_BLOCKNOTELIST,
  payload
})

export const sagaDeleteBlocknote = payload => ({
  type: SAGA_DELETE_BLOCKNOTE,
  payload
})

export const sagaEditBlocknote = payload => ({
  type: SAGA_EDIT_BLOCKNOTE,
  payload
})

export const sagaAddCard = payload => ({
  type: SAGA_ADD_CARD,
  payload
})

export const sagaDeleteCard = payload => ({
  type: SAGA_DELETE_CARD,
  payload
})

export const sagaEditCardBody = payload => ({
  type: SAGA_EDIT_CARD_BODY,
  payload
})

export const sagaEditCardHead = payload => ({
  type: SAGA_EDIT_CARD_HEAD,
  payload
})

export const sagaAddTag = payload => ({
  type: SAGA_ADD_CARD,
  payload
})

export const sagaRemoveTag = payload => ({
  type: SAGA_REMOVE_TAG,
  payload
})
