import React,{useState,useEffect} from 'react'

const Newedit2 = () => {
    const [value,setValue] = useState(JSON.parse(localStorage.getItem("QUIZ2")))
    const sampleObject = {
        questionname:null,
        options:[],
        answer:null
    }

    function handleQuizNameChange(e) {
        setValue({
            ...value,
            quizname: e.target.value
          });
      }
      
    const handleQuizQuestionChange = (e,index)=>{
        const newArr = value.questions
        const changeArr = [...newArr]
        changeArr[index].questionname = e.target?.value
        setValue({
            ...value,
            questions:newArr
        })
    }
    const handleQuestionOptionsChange = (e,index,questionindex)=>{
       const newArr = value.questions
       const changeArr = [...newArr]
       changeArr[questionindex].options[index] = e.target.value
       setValue({
        ...value,
        questions:newArr
       })
    }
    const handleQuestionAnswerChange = (answerValue,questionindex)=>{
        const newArr = value.questions
        const changeArr = [...newArr]
        changeArr[questionindex].answer = answerValue
        setValue({
            ...value,
            questions:newArr
        })
    }
    const handleQuestionOptionRemove = (index,questionindex)=>{
        const newArr = value.questions
        const changeArr = [...newArr]
        changeArr[questionindex].options.splice(index,1)
        setValue({
            ...value,
            questions:newArr
        })
    }
    const handleAddQuestionQption = (questionindex)=>{
        const newArr = value.questions
        const changeArr = [...newArr]
        changeArr[questionindex].options.push("")
        setValue({
            ...value,
            questions:newArr
        })
    }
    const handleAddQuestion = ()=>{
        const newArr = value.questions
        const changeArr = [...newArr]
        changeArr.push(sampleObject)
        setValue({
            ...value,
            questions:changeArr
        })
        
    }

    const submit = ()=>{
       localStorage.setItem("QUIZ2",JSON.stringify(value))
    }
  return (
    <>
    <div className="main-container">
        <div className="sub-container">
               <div style={{margin:'1rem 0'}}><label>QuizName</label> <input type="text" name='quizname' onChange={handleQuizNameChange} value={value?.quizname} /> <button onClick={()=>handleAddQuestion()}>Add Question</button></div> 
                {
                    value.questions.map((item,index)=>{
                        let newArray = item.options
                        let questionname = item.questionname
                        let answer = item.answer
                        let questionindex = index

                        return(
                            <>
                            <div className='options'><label>{index + 1} Question</label> <input type="text" onChange={(e)=>handleQuizQuestionChange(e,index)} className="questionbox"  value={item.questionname} /> <button onClick={()=>handleAddQuestionQption(index)}>Add Option</button></div>
                            <div>
                                {
                                    newArray.map((item,index)=>{
                                        return(
                                        <>
                                        <input type="radio" style={{margin:'0 0.3rem'}} name={questionindex} defaultChecked={index === answer -1} onClick={()=>handleQuestionAnswerChange(index + 1,questionindex)}/> <input type="text" onChange={(e)=>handleQuestionOptionsChange(e,index,questionindex)}  value={item}/> <button onClick={()=>handleQuestionOptionRemove(index,questionindex)}>Remove</button>
                                        </>
                                        )
                                    })
                                }
                            </div>
                            </> 
                        )
                    })
                }
                
                <button onClick={()=>submit()} style={{margin:'2rem 0'}}>Submit</button>
        </div>
    </div>
    </>
  )
}

export default Newedit2