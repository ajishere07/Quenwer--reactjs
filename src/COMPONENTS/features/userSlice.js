import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user: null,
        isUserAuthorised:false,
        isOpen:false
    },
    reducers:{
        login: (state,action) =>{
            state.user = action.payload
            state.isUserAuthorised=true;
        },

        logout: state =>{
            state.user = null
            state.isUserAuthorised = !state.isUserAuthorised;
        },
        
        //Following are for add question modal 

        openModal:state=>{
           state.isOpen=true;
        },
        closeModal:state=>{
            state.isOpen=false;
        }
    }
})

export const {logout, login, openModal,closeModal} = userSlice.actions;

export const selectUserData = state => state.user.user
export const selectUserAuth = state => state.user.isUserAuthorised
export const selectModalAppearance = state => state.user.isOpen

export default userSlice.reducer;