import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { sagalogout } from '../redux/actions/actions'
import Loader3 from './Loader3'


export default function Logout() {

  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(sagalogout())
  })

  return (
   <div className="middleOfScreen" >
    <Loader3 />
    </div>
  )
}
