import React from 'react'
import {Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    btn:{
        marginBottom:"10px",
        paddingLeft:"0px",
        width:"150px",
        paddingRight: "30px",
        fontSize:"12px",
        boxShadow:"none",
        backgroundColor:"#eceded",
        color:"#777779",
        textTransform:"capitalize",
        "&:hover":{
           color:"#777779",
           backgroundColor:"#ccc",
           boxShadow:"none"
        }
    },
    icon:{
        width:"18px",
        height:"18px"
    }
})

function CreateButton() {
    const classes = useStyles()
    return (
        <>
        <Button className={classes.btn}
        variant="contained"
        startIcon={<AddIcon className={classes.icon}/>}>
        Create Space
        </Button> 
        </>
    )
}

export default CreateButton
