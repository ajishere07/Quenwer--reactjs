import './NavBarAvatar.css'
import {useDispatch,useSelector} from 'react-redux'
import React from 'react'
import { Avatar } from '@material-ui/core'
import OtherIcons from './OtherIcons'
import {logout} from '../../features/userSlice'
import {selectUserData} from '../../features/userSlice'

function NavBarAvatar() {

    const authData = useSelector(selectUserData)

    const dispatch = useDispatch()
    const funDispatch = () =>{
        dispatch(logout())
    }
    return (
        <div className="otherIconsContainer">
            <div className="avatarContainer" onClick={funDispatch}>
                <Avatar src={authData.photo}/>
            </div>
            <OtherIcons/>
        </div>
    )
}

export default NavBarAvatar
