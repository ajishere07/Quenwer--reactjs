import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AddQuestion.css'
import { selectUserData } from '../../features/userSlice'
import { closeQModal } from '../../features/modalSlice'
import { Avatar } from '@material-ui/core'
import {collection,addDoc} from 'firebase/firestore'
// import {serverTimestamp} from 'firebase/firestore'
import {db} from '../AUTHENTICATIONS/firebase/fireb'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
function AddQuestion({overlayRef}) {
    const ref = overlayRef.current;
    useEffect(()=>{
       ref.style.visibility="visible"
       return()=>{
            ref.style.visibility="hidden"
        }
    })

    const authData = useSelector(selectUserData);
    const [inputString, setInputString] = useState("")
    const dispatch = useDispatch()
    const funDispatch = () => {
        
        dispatch(closeQModal())
        
    }
    const handleAddingQuestion = (e) =>{
        e.preventDefault()


        if (inputString===''){
            alert('IT CANNOT BE BLANK')
        }
        else
        {
            dispatch(closeQModal())
            
            try{
                addDoc(collection(db,'questions'),{
                    question: inputString,
                    // timestamp:serverTimestamp(),
                    user:authData
                })
            }catch(e){
                alert(e.message)
            }
        }
        

        

    }
    return (
        <div className="modal">
            <div className="modalContent">
                <div className="modalContent__header">
                    <div className="closeIcon"><CloseRoundedIcon onClick={funDispatch} /></div>
                    <p>Add Question</p>
                </div>
                <div className="modalContent__body">
                    <div className="avatarAndName">
                        <Avatar src={authData.photo} />
                        <span>
                            {authData.displayName === "null"
                                ? authData.email
                                : authData.displayName
                            }
                        </span>
                    </div>
                    <div className="inputQuestion">
                        <input 
                        type="text" 
                        placeholder='Write here!, Ask and Start With "Why", "How to", "What"'
                        value={inputString}
                        onChange={(e)=>setInputString(e.target.value)}/>
                    </div>
                </div>
                <div className="modalContent__footer">
                    <button onClick={handleAddingQuestion} type='submit' className="addButton">Add Question</button>
                    <button onClick={funDispatch}>Cancel</button>
                </div>
            </div>

        </div>
    )
}

export default AddQuestion
