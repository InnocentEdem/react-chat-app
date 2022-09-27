
import * as actionTypes from "./actions/actionTypes"

const initialState = {
    users:[],
    messages:[]
}

const chatReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case actionTypes.ADD_NEW_MESSAGE :
            return {
                ...state,
                messages:[...state.messages,payload]
            }
        case actionTypes.DELETE_MESSAGE : 
        return {
            ...state,
            messages:state.messages.filter((element, index)=>(index != payload.index))
        }
        case actionTypes.ADD_NEW_USER :
            return{
                ...state,
                users:[...state.users,payload.username]
            }


        default :
         return state
        
    }
}
export default chatReducer