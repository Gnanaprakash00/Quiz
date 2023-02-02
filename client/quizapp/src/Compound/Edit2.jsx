import React,{useState,useEffect,useRef} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {BiArrowBack} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'
const Edit2 = () => {
  const[value,setValue]=useState([])
  const[answer,setAnswer]=useState()
  const[options,setOptions]=useState([])
  const[change,setChange]=useState()
  const[addoption,setAddoption] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    async function fetchData(){
      try {
        let token = localStorage.getItem('tokenid')
        await axios.post('http://localhost:4000/api/edit2',{id:token}).then(res=>setValue(res.data.user)+setOptions(res.data.user.options)+setAnswer(res.data.user.answer))
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData()
  },[])
    
  const PushMessage=()=>{
    setOptions(old=>[...old,addoption]);  
}
  const RemoveOption=(index)=>{
  let newArray = options
  newArray.splice(index,1)
  setOptions([...newArray]) 
}

const Navigation = async()=>{
   await localStorage.removeItem('tokenid')
   navigate('/')
  }
  
  async function Update(){
    let token = localStorage.getItem('tokenid')
    let input1 = document.getElementById('input1').value
    let input2 = document.getElementById('input2').value
    await axios.post('http://localhost:4000/api/update',{
      id:token,
      quizname:input1,
      questionname:input2,
      options:options,
      answer:change
    }).then(res=>{if(res.data.success == "success")navigate('/')})
  }
  return (
    <div>
     
      
      <div className="containers">
    <div className="inner-containers">
        <div className='icon' onClick={()=>Navigation()}><BiArrowBack size={20}/></div>
        <div className="topics">Edit Question</div>
        <div className="all-inputs">
        <div >
        <input type="text" id='input1'  onChange={(e)=>setValue(e.target.value)}  value={value.quizname} />
       </div>
       <div >
       <input type="text" id='input2' onChange={(e)=>setValue(e.target.value)}  value={value.questionname}/> 
       </div>
       <div>
       <input type="text" name='options' placeholder='Options' onChange={(e)=>setAddoption(e.target.value)}/> <button className='change-btn' onClick={()=>PushMessage()}>ADD OPTION</button>
       </div>
       <div>
     </div>
        </div>
        <div className="options">
        {
    options.map((item,index)=>{
        return (
            <ul style={{padding:'0 1.5rem'}} key={index}>
            <li>
              <input name="name"  className='radio' type="radio" onClick={()=>setChange(index + 1)} defaultChecked={index === answer - 1}/> 
              <p>{item}</p>
              <button className='option-remove-btn' onClick={()=>RemoveOption(index)}><MdClose size={17}/></button>
            </li>
            </ul>  
        )
    })
   }
    <button className='btn' onClick={()=>Update()}>SAVE</button> 
    </div>
    </div>
    </div>
    </div>
  )
}

export default Edit2
