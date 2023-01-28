import React,{useEffect,useState,} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {MdDeleteOutline,MdEditNote} from 'react-icons/md'
import axios from 'axios'
const Landing = () => {
    const[questions,setQuestions]=useState([])
    const navigate = useNavigate()
   const RemoveQuez = (id)=>{
    axios.post('http://localhost:4000/api/delete',{id:id}).then(res=>{if(res.data.delete){window.location.replace('http://localhost:3000')}})
    }
    const SelectQuez = async(id)=>{
      await localStorage.setItem('tokenid',id);
      navigate('/edit2')
    }
    const List = ()=>{
        return (
            <>
            {questions.map((item,index)=>{
                return (
                    <tr key={index}>
                    <td>{item.quizname}</td>
                    <td><span style={{padding:'0 1.8rem 0 0'}}><MdDeleteOutline size={20} className="delete" onClick={()=>RemoveQuez(item._id)} color="#ff2400"/></span><MdEditNote size={20} onClick={()=>SelectQuez(item._id)} className="edit" color="#39ff14"/></td>
                    </tr>
                )
            })}
            </>
        )
    }


    useEffect(()=>{
        axios.get('http://localhost:4000/api/getall')
        .then(data=>setQuestions(data.data.user))
    },[])
  return (
   <>
   <div className="container">
    <div className="inner-container">
        <div className="inner-container-top"><Link to={'/edit'}><button>Add Quiz</button></Link></div>
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
