import { type } from "os";
import React from "react";

type privacy = {
  type: string;
  value:any,
};

export default function Input(props: privacy) {
    // const ValueGet = (event:any) => {
    //     // console.log(event.target.value);
    //     value(event.target.value);
        
    //   };
  return (
    <div>
      <input onChange={props.value} type={props.type} />
    </div>
  );
}
