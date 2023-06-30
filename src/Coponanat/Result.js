

import React from 'react'
import { useSelector} from 'react-redux'
export default function Result() {

    let data = useSelector((storedata)=>{

        return storedata;

    })
  return (
    <div>
        <p>Coponenat 1:{data.cop1}</p>
        <p>Coponenat 2:{data.cop2}</p>
    </div>
  )
}
