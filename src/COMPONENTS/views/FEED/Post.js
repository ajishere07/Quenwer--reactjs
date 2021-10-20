import React from "react";
import "./Post.css";
import { Avatar, Button } from "@material-ui/core";
import AddAnswer from "../MODALS/AddAnswer";
import { selectQuestionId, QuestionData } from "../../features/questionSlice";
import { selectModalAnswer, openAModal } from "../../features/modalSlice";
import {
  ArrowUpwardOutlined,
  ArrowDownwardOutlined,
  RepeatOutlined,
  MoreHorizOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { useEffect, useState } from "react";
import { db } from "../AUTHENTICATIONS/firebase/fireb";

import { collection, onSnapshot } from "@firebase/firestore";

function Post({ question, userData, id }) {
  const dispatch = useDispatch();
  const dispatchForId = useDispatch();
  const questionId = useSelector(selectQuestionId);
  const answerInput = useSelector(selectModalAnswer);
  const [newQuestionId, setNewQuestionId] = useState(questionId);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    dispatch(openAModal());
  }, [newQuestionId]);
  const handleAnswerInput = () => {
    dispatchForId(QuestionData(id));
    setNewQuestionId(questionId);
  };
  useEffect(() => {
    onSnapshot(collection(db, "questions", `${id}`, "answers"), (doc) =>
      setAnswers(doc.docs.map((a) => ({ ...a.data(), id })))
    );
  }, []);
  console.log(answers);
  return (
    <div className="postContainer">
      <div className="postContainer__nameAndAvatar">
        <div className="Avatar">
          <Avatar src={userData.photo} />
        </div>
        <div className="Name">
          <span>
            {userData.displayName === "null"
              ? userData.email
              : userData.displayName}
          </span>
          {/* <p>{timestamp}</p> */}
        </div>
      </div>
      <div className="postContainer__question">
        <p>{question}</p>
        <Button onClick={handleAnswerInput}>Answer</Button>
      </div>
      <div>
        {answerInput ? (
          <div>{questionId === id ? <AddAnswer qId={id} /> : <p></p>}</div>
        ) : (
          <div></div>
        )}
      </div>

      {answers.map((a) => (
        <div className="postContainer__answers">
          <div className="avatarAndName">
            <Avatar src={userData.photo} />
            <span>
              {userData.displayName === "null"
                ? userData.email
                : userData.displayName}
            </span>
          </div>
          <p key={a.id}>{a.answer}</p>
        </div>
      ))}

      <div className="postContainer__footer">
        <div className="votes icons">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <div className="commentAndShare icons">
          <RepeatOutlined />
          <ChatBubbleOutlineIcon />
        </div>
        <div className="otherOptions icons">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
