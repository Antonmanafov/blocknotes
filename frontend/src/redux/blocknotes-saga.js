import { call, put, takeEvery } from "@redux-saga/core/effects";
import { changeBlocknotesList, deleteBlocknote, editBlocknote, updateBlocknotesAndCards } from "./actions/actions";
import { SAGA_ADD_CARD, SAGA_ADD_TAG, SAGA_CHANGE_BLOCKNOTELIST, SAGA_DELETE_BLOCKNOTE, SAGA_DELETE_CARD, SAGA_EDIT_BLOCKNOTE, SAGA_EDIT_CARD_BODY, SAGA_EDIT_CARD_HEAD, SAGA_REMOVE_TAG } from "./actions/actionstypes";

const withFetchCreator = async (payload) => {
  const postBlocknote = await fetch(payload.url, payload.constructor)
  return await postBlocknote.json()
}

function* addBlocknoteWarker(action) {
  const result = yield call(withFetchCreator, action.payload)
  yield put(changeBlocknotesList(result))
}

function* deleteBlocknoteWorker(action) {
  const result = yield call(withFetchCreator, action.payload)
  yield put(deleteBlocknote(result))
}

function* editBlocknoteWorker(action) {
  const result = yield call(withFetchCreator, action.payload)
  yield console.log('dpsadpsadposad')
  yield console.log(result)
  yield put(editBlocknote(result))
}

function* addCardWorker(action) {
  const result = yield call(withFetchCreator, action.payload)
  yield put(updateBlocknotesAndCards(result))
}

function* deleteCardWorker(action) {
  const result = yield call(withFetchCreator, action.payload)
  yield put(updateBlocknotesAndCards(result))
}

function* editCardHeadWorker(action) {
  const result = yield call(withFetchCreator, action.payload)
  yield put(updateBlocknotesAndCards(result))
}

function* editCardBodyWorker(action) {
  const result = yield call(withFetchCreator, action.payload)
  yield put(updateBlocknotesAndCards(result))
}

function* addTagWorker(action) {
  const result = yield call(withFetchCreator, action.payload)
  yield put(updateBlocknotesAndCards(result))
}


function* removeTagWorker(action) {
  const result = yield call(withFetchCreator, action.payload)
  yield put(updateBlocknotesAndCards(result))
}

export default function* watcher() {
  yield takeEvery(SAGA_CHANGE_BLOCKNOTELIST, addBlocknoteWarker)
  yield takeEvery(SAGA_DELETE_BLOCKNOTE, deleteBlocknoteWorker)
  yield takeEvery(SAGA_EDIT_BLOCKNOTE, editBlocknoteWorker)
  yield takeEvery(SAGA_ADD_CARD, addCardWorker)
  yield takeEvery(SAGA_DELETE_CARD, deleteCardWorker)
  yield takeEvery(SAGA_EDIT_CARD_HEAD, editCardHeadWorker)
  yield takeEvery(SAGA_EDIT_CARD_BODY, editCardBodyWorker)
  yield takeEvery(SAGA_ADD_TAG, addTagWorker)
  yield takeEvery(SAGA_REMOVE_TAG, removeTagWorker)
}
