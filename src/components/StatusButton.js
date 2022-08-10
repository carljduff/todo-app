import React, { useState } from "react";



export default function StatusButton({ label, status, setStatus }) {

  // const filterHandler = (label) => {
  //   setStatus(label)
  //   if(status === label) {

  //   }
  // }

  return (
    <div>
      <button onClick={filterHandler} className="button">
        {label}
      </button>
    </div>
  );
}
