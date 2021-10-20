import './OtherIcons.css'
import React from 'react'
import {useDispatch} from 'react-redux'
import LanguageIcon from  '@material-ui/icons/Language'
import { Button } from '@material-ui/core'
import {openQModal} from '../../features/modalSlice'
function OtherIcons() {

    const dispatch = useDispatch()
    const funDispatch = () =>{
        dispatch(openQModal())
    }
    return (
        <div className="otherIcons__container">
            <div className="languageIcon">
            <LanguageIcon/>
            </div>
            <Button onClick={funDispatch}>Add Question</Button>
        </div>
    )
}

export default OtherIcons
