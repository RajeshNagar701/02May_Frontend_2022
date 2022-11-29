import React,{useEffect} from 'react'

function Func_img() {

    useEffect(()=>{
        console.log('didmount');
        return ()=> { console.log('Component destroy')}
      },[]);
    

  return (
    <div>
        <img src='https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg' width="300px"/>
    </div>
  )
}

export default Func_img