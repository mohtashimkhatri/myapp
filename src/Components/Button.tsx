import React from "react";

type buttonPrivacy = {
  label: string;
  onclick: any;
};

function Button(props:buttonPrivacy) {
  return (
    <div>
      <button onClick={props.onclick}>{props.label}</button>
    </div>
  );
}

export default Button;
