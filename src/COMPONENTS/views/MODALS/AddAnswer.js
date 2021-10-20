import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AddAnswer.css'
import { selectUserData } from '../../features/userSlice'
import { closeAModal } from '../../features/modalSlice'
import { Avatar } from '@material-ui/core'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../AUTHENTICATIONS/firebase/fireb'

function AddQuestion({qId}) {

    const authData = useSelector(selectUserData);
    const [answer, setAnswer] = useState("")
    const dispatch = useDispatch()
    const funDispatch = () => {
        dispatch(closeAModal())
    }

    console.log(qId)
    const handleAddingQuestion = (e) =>{
        e.preventDefault()


        if (answer===''){
            alert('IT CANNOT BE BLANK')
        }
        else
        {
            try{
               addDoc(collection(db, 'questions',`${qId}`,'answers'), {
                   answer: answer,
                   user:authData
               })
            }catch(e){
                alert(e.message)
            }
            dispatch(closeAModal())
        }
    }
    return (
        <div className="container">
            <div className="containerContent">
                <div className="containerContent__header">
                    
                    
                </div>
                <div className="containerContent__body">
                    <div className="avatarAndName">
                        <Avatar src={authData.photo} />
                        <span>
                            {authData.displayName === "null"
                                ? authData.email
                                : authData.displayName
                            }
                        </span>
                    </div>
                    <div className="inputAnswer">
                        <textarea 
                        type="text" 
                        placeholder='Write Your Answer'
                        value={answer}
                        onChange={(e)=>setAnswer(e.target.value)}/>
                    </div>
                </div>
                <div className="containerContent__footer">
                    <button onClick={handleAddingQuestion} type='submit' className="addButton">Add Answer</button>
                    <button onClick={funDispatch}>Cancel</button>
                </div>
            </div>

        </div>
    )
}

export default AddQuestion
