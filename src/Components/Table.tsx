// import { type } from 'os'
import React from "react";
type person = {
  data: any[];
  cols: any[];
};
function Table(props: person) {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            {props.cols.map((e) => {
              return <th>{e.tile}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>

            {props.cols.map((e)=>{
                return <>
                <td>{e.id}</td>
            </>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
