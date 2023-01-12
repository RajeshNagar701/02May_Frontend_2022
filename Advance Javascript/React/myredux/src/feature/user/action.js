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
