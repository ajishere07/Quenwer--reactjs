import {createSlice}from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name:'modal',
    initialState:{
        isOpenQuestionModal:false,
        isOpenAnswerModal:false
    },
    reducers:{
        openQModal:state=>{
            state.isOpenQuestionModal=true;
        },
        closeQModal:state=>{
            state.isOpenQuestionModal=false;
        },
        openAModal:state=>{
            state.isOpenAnswerModal=true;
        },
        closeAModal:state=>{
            state.isOpenAnswerModal=false
        }
    }
})
export const {openQModal,closeQModal,openAModal,closeAModal} = modalSlice.actions

export const selectModalQuestion = state => state.modal.isOpenQuestionModal
export const selectModalAnswer = state => state.modal.isOpenAnswerModal

export default modalSlice.reducer