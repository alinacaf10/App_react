import React, { Component } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Actioner from '../redux/actions'

function Counter() {
  const count = useSelector(state => state.countReducer);
  const dispatch=useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(Actioner.actions.added(1))}>Add(+)</button>
      <button onClick={() => dispatch(Actioner.actions.reduced(1))}>Reduce(-)</button>
      <p>{count}</p>
    </div>
  )
}

export default Counter