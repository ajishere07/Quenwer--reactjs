import React from "react";
import "./Qinput.css";
import {selectUserData} from '../../features/userSlice'
import { useSelector,useDispatch } from "react-redux";
import {openQModal} from '../../features/modalSlice'
import { Avatar } from "@material-ui/core";

function Qinput() {
  const dispatch = useDispatch()
  const funDispatch = () =>{
    dispatch(openQModal())
  }
  const authData = useSelector(selectUserData);
  return (
    <div className="qinputContainer">
      <div className="avatarAndName">
        <Avatar src={authData.photo} />
        <span>
          {authData.displayName === "null"
            ? authData.email
            : authData.displayName
          }
        </span>
      </div>
      <div className="inputContainer" >
        <span onClick={funDispatch} >What is your question </span>
      </div>
    </div>
  );
}

export default Qinput;
