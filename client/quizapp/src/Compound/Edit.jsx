import React ,{useState}from 'react'
import axios from 'axios'
import {MdUpArrow} from 'react-icons/md'
import { Link } from 'react-router-dom'
const Edit = () => {
    const[value,setValue]=useState('')
    const[answer,setAnswer]=useState('')
    const[message,setMessage]=useState([])
    let Object = {
        quizname:value.quizname,
        questionname:value.question,
        options:message,
        answer:answer
    }
    
    const Visible =()=>{
        var input2 = document.getElementById('input2')
        var input3 = document.getElementById('input3')
        if(value.quizname.length >= 1 ){
         input2.style.visibility="visible"
        }
        if(value.question.length >= 1){
            input3.style.visibility="visible"
        }
        
    }
    
    const PushMessage=()=>{
        setMessage(old=>[...old,value.options]);  
    } 
   async function sendData(){
   await axios.post('http://localhost:4000/api/insert',{datas:Object}).then(res=>console.log(res))
   }
    
  return (
   <>
    <div className="containers">
    <div className="inner-containers">
        <div className='icon'><Link to={'/'}>back</Link></div>
        <div className="topics">Question Entry</div>
        <div className="all-inputs">
        <div className="input1">
       <input type="text" name="quizname" placeholder='Quizname' onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/> <button onClick={()=>Visible()}>Next</button>
       </div>
       <div className="input2" id="input2">
       <input type="text"  name='question' placeholder='Question' onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/> <button onClick={()=>Visible()}>Next</button>
       </div>
       <div className="input3" id='input3'>
       <input type="text" name='options' placeholder='Options' onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} /> <button onClick={()=>PushMessage()}>add</button>
     </div>
        </div>
        <div className="options">
    {
    message.map((item,index)=>{
        return (
            <ul style={{padding:'0 1.5rem'}}>
            <li><input name="name"  className='radio' onClick={()=>setAnswer(index + 1)} type="radio"/> <label>{item}</label></li>
            </ul>  
        )
    })
   }
    <button onClick={()=>{sendData()}} className="btn">save</button> 
    </div>
    </div>
    </div>
   </>
  )
}

export default Edit
