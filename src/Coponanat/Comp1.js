

import React from 'react'
import { useState } from 'react'
//import { Store } from 'redux'
import myReduxStore from '../Store/Store'

export default function Comp1() {
    const [state , setState] = useState("")
    function getData(){
        //create action object 
          //contain special proprty type 
        var myAction ={
            type:"cop1",
            payload:state
        }

        myReduxStore.dispatch(myAction);


    }

  return (
    <div>
        <input style={{marginTop:"50px"}} onChange={(e)=>{ setState(e.target.value)}}type="text" placeholder='Enetr some text'/>
        <button style={{margin:"10px"}} onClick={getData}>Submit</button>
    </div>
  )
}
