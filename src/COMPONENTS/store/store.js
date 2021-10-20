import {configureStore} from '@reduxjs/toolkit'

import userReducer from '../features/userSlice'
import questionReducer from '../features/questionSlice'
import modalReducer from '../features/modalSlice'

export default configureStore({
    reducer:{
        user:userReducer,
        question:questionReducer,
        modal:modalReducer
    }
})