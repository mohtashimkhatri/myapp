import { type } from 'os'
import React from 'react'
 
type SelectPrivacy = {
    label:string,
    option:any[],
    value:any,
}

function Select(props:SelectPrivacy) {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <select  onChange={props.value}>
        {
        props.option.map((e,i)=>{
            return <option key={i} value={e.value}>{e.gender}</option>
        })
        }
      </select>
    </div>
  )
}

export default Select
