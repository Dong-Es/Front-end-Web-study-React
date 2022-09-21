import React from "react";

function Box(props){
    const clickme= () =>{
        alert("Maplestory")
    }
    return(
        <div className='box'>
        box{props.num}
        <br></br>
        {props.name}
        <br></br>
        <button className="clickbtn" onClick={clickme}>click</button>
      </div>
    )
}
export default Box
