import React, { useState } from 'react'
import './card.css'
import '../App.css'
export default function Card({img,name,price}) {
  const [state,setState]=useState(0);
  var func=()=>{
    setState({
        state:1-state
    })
    console.log(state)
  }
  return (
    <section className="cardbox">
        <div className="imgbox">
        {state==0? <i onClick={func} className="fa fa-heart-o "></i>:        
<i onClick={func} className="fa fa-heart-o" style={{color:"red"}}></i>
}
       
          <img src={img} />
          <div className="hoverable">View Product</div>
        </div>
        <p>{name}</p>
        <p>Rs {price}</p>
      </section>

  )
}

