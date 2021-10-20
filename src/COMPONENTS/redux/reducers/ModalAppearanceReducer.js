const initialState = {
    appearance:false
}
const checkOnline = (state=initialState, action) =>{
   switch(action.type){
       case "switch": 
            return {
                appearance:!state.appearance
            }
        default:
            return state
   }
}

export default checkOnline