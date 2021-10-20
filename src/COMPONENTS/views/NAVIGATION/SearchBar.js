import React from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles({
    searchIcon:{
        color:"blue",
        width:"20px" 
    },

    navIcons:{
        width:"3rem",
        height:"3rem"
    }

})

function SearchBar() {
    const classes = useStyles() 
    return (
        <div className="searchBarContainer">
            <div className="searchBoxContainer">
                <div className="searchIcon">
                    <SearchIcon className={classes.Searchicon}/>
                </div>
                <input placeholder="Search Quesitions" />
            </div>
        </div>
    )
}

export default SearchBar;
