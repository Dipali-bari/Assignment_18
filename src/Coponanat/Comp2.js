

import React from 'react'
import {useState} from 'react'
import myReduxStore from '../Store/Store'

export default function Comp2() {

  const [first, setfirst] = useState("")

  function submitData(){

    var helloAction={
      type:"comp2",
      hello:first
    }
    myReduxStore.dispatch(helloAction)

  }
  return (
    <div>
        <input style={{marginTop:"50px"}} onChange={(e)=>{setfirst(e.target.value)}}type ="text" placeholder='Eenter some text'/>
        <button style={{margin:"10px"}} onClick={submitData}>Click me</button>
    </div>
  )
}
