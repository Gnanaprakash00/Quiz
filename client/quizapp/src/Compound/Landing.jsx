import React,{useEffect,useState,} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {MdDeleteOutline,MdEditNote} from 'react-icons/md'
import axios from 'axios'
const Landing = () => {
    const[questions,setQuestions]=useState([JSON.parse(localStorage.getItem('QUIZ2'))])
    
    let sample = {
        quizname:null,
        questions:[]
    }
     localStorage.setItem("QUIZ2",JSON.stringify(sample))

    function remove(index){
        const newArr = questions
        const changeArr = [...newArr]
        changeArr.splice(index,1)
        localStorage.setItem("QUIZ2",JSON.stringify(changeArr))
    }
   
    const List = ()=>{
        return (
            <>
            {questions.map((item,index)=>{
                return (
                    <tr key={index}>
                    <td>{item.quizname}</td>
                    <td><span style={{padding:'0 1.8rem 0 0'}}><MdDeleteOutline size={20} className="delete"  onClick={()=>remove(index)} color="#ff2400"/></span><Link to={'/list'}><MdEditNote size={20}  className="edit" color="#39ff14"/></Link></td>
                    </tr>
                )
            })}
            </>
        )
    }


    
  return (
   <>   
   <div className="container">
    <div className="inner-container">
        <div className="inner-container-top"><Link to={'/list'}><button>Add Quiz</button></Link></div>
        <div className="inner-container-down">
            <table className="table">
                <thead>
                    <tr>
                        <th>Quiz List</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  {<List/>}
                </tbody>
            </table>
        </div>
    </div>
   </div>
   </>
  )
}

export default Landing
