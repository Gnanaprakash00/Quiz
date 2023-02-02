import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import {MdUpArrow} from 'react-icons/md'
import { Link ,useNavigate} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'
const Edit = () => {
    const[value,setValue]=useState('')
    const[answer,setAnswer]=useState('')
    const[message,setMessage]=useState([])
    const navigate = useNavigate()
    let Object = {
        quizname:value.quizname,
        questionname:value.question,
        options:message,
        answer:answer
    }

    const Visible =()=>{
        var input2 = document.getElementById('input2')
        var input3 = document.getElementById('input3')
        if(value.quizname?.length >= 1){
         input2.style.visibility="visible"
        }
        if(value.question?.length >= 1){
            input3.style.visibility="visible"
        }
        
    }
    
    const PushMessage=()=>{
        setMessage(old=>[...old,value.options]);  
    }

    const RemoveOption=(index)=>{
        let newArray = message
        newArray.splice(index,1)
        setMessage([...newArray]) 

    }

   async function sendData(){
   await axios.post('http://localhost:4000/api/insert',{datas:Object}).then(res=>{if(res.data.success == "success")navigate('/')})
   }
    
  return (
   <>
    <div className="containers">
    <div className="inner-containers">
        <div className='icon'><Link to={'/'}><BiArrowBack size={20}/></Link></div>
        <div className="topics">Question Entry</div>
        <div className="all-inputs">
        <div className="input1">
       <input type="text" name="quizname" placeholder='Quizname' onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/> <button className='change-btn' onClick={()=>Visible()}>ADD QUIZ</button>
       </div>
       <div className="input2" id="input2">
       <input type="text"  name='question' placeholder='Question' onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/> <button className='change-btn' onClick={()=>Visible()}>ADD QUESTION</button>
       </div>
       <div className="input3" id='input3'>
       <input type="text" name='options' placeholder='Options' onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} /> <button className='change-btn' onClick={()=>PushMessage()}>ADD OPTION</button>
     </div>
        </div>
        <div className="options">
    {
    message.map((item,index)=>{
        return (
            <ul style={{padding:'0 1.5rem'}} key={index}>
            <li>
                <div><input name="singleoption" className='radio' onClick={()=>setAnswer(index + 1)} type="radio"/></div>
                <div><label>{item}</label></div>
                <div><button className='option-remove-btn' onClick={()=>RemoveOption(index)}><MdClose size={17}/></button></div>
            </li>
            </ul>  
        )
    })
   }
    <button onClick={()=>{sendData()}} className="btn">SAVE</button> 
    </div>
    </div>
    </div>
   </>
  )
}

export default Edit
