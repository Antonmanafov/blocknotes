import { call, delay, put, takeEvery } from "@redux-saga/core/effects";
import { authenticated, loading, logout, updateUserInfo } from "./actions/actions";
import { SAGAAUTHENTICATED, SAGALOGOUT, SAGAREGISTRATION, SAGA_UPDATE_USERINFO } from "./actions/actionstypes";


const logoutFetch = () => fetch('/logout')
function* logoutWorker() {
  yield delay(1500)
  yield call(logoutFetch)
  yield put(logout())
}

async function loginFetch(payload) {
  
  const email = payload.event.target.email.value
  const password = payload.event.target.password.value

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      email,
      password
    })
  })

  const result =  await response.json()
  if (result.status === false) {
    payload.setStatus(true)
    return result
  } else {
    return result
  }
}

function* loginWorker(action) {
  yield delay(1500)
  const result = yield call(loginFetch, action.payload)
  if (result.status !== false) {
    yield put(authenticated(result))
    yield localStorage.setItem('token', result.token)
  } else {
    yield put(loading(false))
}
}

async function registrationFetch (payload) {
  const username = payload.event.target.username.value
  const email = payload.event.target.email.value
  const password = payload.event.target.password.value

  const response = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      username,
      email,
      password
    })
  })

const result = await response.json()
if(result.status === false) {
  payload.status(true)
  return result
} return result
}

function* registrationWorker(action) {
yield delay(1500)
const result = yield call(registrationFetch, action.payload)
if (result.status === false) {
yield put(loading(false))
} else {
  yield put(authenticated(result))
}
}

async function updateUserFetch(payload) {
  const username = payload.event.target.username.value
  const firstname = payload.event.target.firstname.value
  const lastname = payload.event.target.lastname.value
  const age = payload.event.target.age.value
  const aboutMe = payload.event.target.aboutMe.value

  const updatedUser = await fetch('/updateUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      username,
      firstname,
      lastname,
      age,
      aboutMe,
      id: payload.id
    })
  })
  const newInfo = await updatedUser.json()
  payload.setForEdit(false)
  return newInfo
}

function* updateUserInfoWorker (action) {
  yield delay(1500)
  const newInfo = yield call(updateUserFetch, action.payload)
  yield put(updateUserInfo(newInfo))
}

// ------------------------------------------------------


export default function* watcher() {

  yield takeEvery(SAGALOGOUT, logoutWorker)
  yield takeEvery(SAGAAUTHENTICATED, loginWorker)
  yield takeEvery(SAGAREGISTRATION, registrationWorker)
  yield takeEvery(SAGA_UPDATE_USERINFO, updateUserInfoWorker)
}

