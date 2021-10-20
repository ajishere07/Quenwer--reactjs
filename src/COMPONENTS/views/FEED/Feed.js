import React,{useState, useEffect} from 'react'
import './Feed.css'
import Qinput from './Qinput'
// import {useDispatch,useSelector} from 'react-redux'
// import {selectPostsData,QuestionData} from '../../features/questionSlice'
import Post from './Post'
import {db} from '../AUTHENTICATIONS/firebase/fireb'
import {orderBy, query, collection, onSnapshot} from 'firebase/firestore'

function Feed() {
    
    // const postsData = useSelector(selectPostsData)
    const [posts,setPosts] = useState([])
    console.log(posts)
    useEffect(() => {   
        
        query(collection(db, 'questions'), orderBy('timestamp','desc'))
        onSnapshot(collection(db, 'questions'), (doc)=>
            setPosts(doc.docs.map(( a )=>({...a.data(), id:a.id})))
            //  console.log(doc.docs.map(( a )=>({...a.data(), id:a.id})))
            )
    }, [])
    console.log(posts)
    return (
        <div className="feedContainer">
            <Qinput/>
            
            { 
                posts.map((post)=>
                    <Post
            
                    key={post.id} 
                    id={post.id}
                    // answer={post.answers}
                    question={post.question} 
                    timestamp={post.timestamp} 
                    userData={post.user}/>)  
            }
            
        </div>
    )
}

export default Feed
