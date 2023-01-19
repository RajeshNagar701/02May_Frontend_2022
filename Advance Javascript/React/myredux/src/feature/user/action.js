import * as types from '../actionType';
import axios from "axios";

const getdata=(users)=>({
    type:types.GET_USER,
    payload:users
})

export const getuserdata=()=>{
    return function(dispatch){
        axios.get(`http://localhost:3000/users`)
        .then((resp)=>{
            
            dispatch(getdata(resp.data))
            console.log(resp.data);    
        })
    }
}

export const addUser=(data)=>{
    return function(dispatch){
        axios.post(`http://localhost:3000/users`,data)
        .then((resp)=>{
        })
        .catch(error=>console.log(error))
    }
}


export const deleteUser=(id)=>{
    return function(dispatch){
        axios.delete(`http://localhost:3000/users/${id}`)
        .then((resp)=>{
           
            dispatch(getuserdata());
        })
        .catch(error=>console.log(error))
    }
}
