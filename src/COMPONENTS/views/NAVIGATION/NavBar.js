import React from 'react'
import './NavBar.css'
import NavBarLogo from './NavBarLogo'
import NavBarIcons from './NavBarIcons'
import SearchBar from './SearchBar'
import NavBarAvatar from './NavBarAvatar'

function NavBar() {
    return (
        
            <div className="navigationBar">
            <NavBarLogo/>
            <NavBarIcons/>
            <SearchBar/>
            <NavBarAvatar/>
            </div>
        
    )
}

export default NavBar
