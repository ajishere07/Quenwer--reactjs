import React from 'react'
import './NavBarIcons.css'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'

function NavBarIcons() {
    
    return (
        <div className="iconsContainer">
           <div className="homeicon icon">
             <HomeIcon />
           </div>
           <div className="homeicon icon">
             <FeaturedPlayListOutlinedIcon />
           </div>
           <div className="homeicon icon">
             <AssignmentTurnedInIcon />
           </div>
           <div className="homeicon icon">
             <PeopleAltOutlinedIcon />
           </div>
           <div className="homeicon icon">
             <NotificationsNoneOutlinedIcon />
           </div>
        </div>
    )
}

export default NavBarIcons

