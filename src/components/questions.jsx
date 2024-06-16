import React from 'react'
import '../App.css'; 


export default function Questions({questions, answers, activeFaq, setActiveFaq, index}) {
  let [open, setopen] = "";
  return (
    < >
           <div className='questions' onClick={()=>setActiveFaq(index)}>
            <h5>{questions}</h5>
            {(index==activeFaq)?<span>&times;</span>:<span>&#43;</span>}
            </div>
        
        {(activeFaq !== undefined)?<p className={(index === activeFaq)?"active answers":"answers"}>{answers}</p>:""}
    </>
  )
}
