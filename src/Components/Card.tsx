import { type } from "os";
import React from "react";
 type reseaved ={
    data:any[]
    Categrios:any[]
    // Value:any,
 }
function Card(props:reseaved) {
    const {data,Categrios,} = props; 
  return <div>
<p>Hey ✌ my Name is  {data.map((e)=>{
    return <span className="Span">{e.name}</span>
})} </p>
<p>My Userid is {data.map((e)=>{
    return <span className="Span">{e.userId}</span>
})} </p>
<p>This is Active  {data.map((e)=>{
    return <span className="Span">{e.isActive}</span>

})} </p>
<label htmlFor="">Categrious</label>
<select name="" id="">
    <option value="Sceince">{Categrios.map((e)=>{
        return <span>{e.Categrious1}</span>
    })}</option>
     <option value="Bio"    >{Categrios.map((e)=>{
        return <span>{e.Categrious2}</span>
    })}</option>
</select>
  </div>;
}

export default Card;
