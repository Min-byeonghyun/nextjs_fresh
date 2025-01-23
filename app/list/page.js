'use client'

import { useState } from "react"

export default function List() {

  let 상품 = ['Tomato','Pasta','Coconut']
  let [count,setCount] = useState([0 , 0, 0])

  const handleCountChange = (index, change) => {
    let newCount = [...count]; 
    newCount[index] += change; 
    if (newCount[index] < 0) newCount[index] = 0; 
    setCount(newCount);  
  };

  return(
    <div>
      <h3 className="title">상품목록</h3>
      {
        상품.map((a, i)=> {
          return (
            <div className="food" key={i}>
              <img src={`/food${i}.png`} className="food-img"/>
            <h4>{a} $40</h4>
            <span> {count[i]} </span>
            <button onClick={() => handleCountChange(i, 1)}>+</button>
            <button onClick={() => handleCountChange(i, -1)}>-</button>
          </div>
          )
        })
      }
    </div>
  )
}