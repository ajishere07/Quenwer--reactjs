import "./App.css";
import {useEffect} from 'react'
import NavBar from "./COMPONENTS/views/NAVIGATION/NavBar";
import Box from "./COMPONENTS/views/THEBOX/Box";
import {useSelector,useDispatch} from 'react-redux'
import {onAuthStateChanged} from 'firebase/auth' 
import {authe} from './COMPONENTS/views/AUTHENTICATIONS/firebase/fireb'
import LoginPage from "./COMPONENTS/views/AUTHENTICATIONS/LoginPage";
import {login} from './COMPONENTS/features/userSlice'
import {selectUserAuth} from './COMPONENTS/features/userSlice'
function App() {
 
  const dispatch = useDispatch()
  const authSwitch = useSelector(selectUserAuth)
 
  useEffect(()=>{
    onAuthStateChanged(authe,userLogined=>{
      if(userLogined){
        dispatch(login({
            uid:userLogined.uid,
            displayName:userLogined.displayName,
            email:userLogined.email,
            photo:userLogined.photoURL
        }))
      }
    })
  }, [dispatch])
  
  return (
    <div className="App">
      {authSwitch ? (
        <>
          <NavBar />
          <Box />
        </>
      ) : (
        <>
          <LoginPage/>
        </>
      )}
    
    </div>
  );
}

export default App;
