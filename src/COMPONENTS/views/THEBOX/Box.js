import React,{useRef}  from 'react'
import SideBar from '../SIDEBAR/SideBar'
import Feed from '../FEED/Feed'
import './Box.css'
// import AddAnswer from '../MODALS/AddAnswer'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import {selectModalQuestion} from '../../features/modalSlice'
import AddQuestion from '../MODALS/AddQuestion'
function Box() { 
    const questionModalSwitch = useSelector(selectModalQuestion)
    // const answerModalSwitch = useSelector(selectModalAnswer)
    let overlayRef = useRef(null)

    return (
       
    
        <div className="box">
            <div ref={overlayRef} className="overlayBox stack_top" style={{visibility:"hidden"}}/>
            <div className="boxContainer">
                <Modal isOpen={questionModalSwitch} 
                style={
                    {
                        
                        overlay:{
                            zIndex:"100",
                            position: 'fixed',
                            top: '100px',
                            left: '280px',
                            right: '280px',
                            bottom: '280px',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            boxShadow:'4px 5px 5px rgba(0,0,0,0.6)',
                            borderRadius: '10px'
                        },
                        content:{
                        
                            position:'absolute',
                            top:'0px',
                            left:'0px',
                            right:'0px',
                            bottom:'0px',
                            border: '1px solid #f35b04',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
            
                        }
                        
                    }
                }>
                    <AddQuestion overlayRef={overlayRef}/>
                </Modal>
                {/* <Modal isOpen={answerModalSwitch} 
                style={
                    {
                        
                        overlay:{
                            position: 'fixed',
                            top: '100px',
                            left: '280px',
                            right: '280px',
                            bottom: '100px',
                            backgroundColor: 'grey',
                            boxShadow:'4px 5px 5px grey',
                            borderRadius: '10px'
                        },
                        content:{
                        
                            position:'absolute',
                            top:'0px',
                            left:'0px',
                            right:'0px',
                            bottom:'0px',
                            border: '1px solid #f35b04',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
            
                        }
                        
                    }
                }>
                    <AddAnswer/>
                </Modal> */}
                
                <SideBar/>
                <Feed/>
            </div>
        </div>
    )
}

export default Box


