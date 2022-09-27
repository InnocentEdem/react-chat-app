import * as actionTypes from './actionTypes'

export const addNewMessage = (payload)=> ({type:actionTypes.ADD_NEW_MESSAGE, payload})
export const deleteMessage = (payload)=>({type:actionTypes.DELETE_MESSAGE, payload})
export const addNewUser = (payload)=>({type:actionTypes.ADD_NEW_USER, payload})