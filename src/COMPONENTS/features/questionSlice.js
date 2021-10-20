import {createSlice} from '@reduxjs/toolkit'

export const questionSlice= createSlice({
    name:'question',
    initialState:{
        questionId:null
    },
    reducers:{
        QuestionData:(state,action)=>{
            state.questionId= action.payload
        }
    }
})

export const { QuestionData }= questionSlice.actions

export const selectQuestionId = (state)=> state.question.questionId

export default questionSlice.reducer