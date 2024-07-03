import { useState,useEffect,useCallback } from 'react'
 
 
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)
   //let counter = 5;
   const addValue = ()=>{
    console.log("clicked ");
    if(counter == 20){
      return;
    }
    else{
      setCounter(counter+1);
    }
    // console.log(counter)
   }
   
   const removeValue = ()=>{
     console.log("clicked");
     if(!counter == 0){
       setCounter(counter - 1);
     }
    //  console.log(counter)
   }

  return (
    <>
       <h1>Chai aur react by Vikas Dewangan</h1>
       <h2>Counter value : {counter}</h2>
       <button
       onClick={addValue}
       >Add Value</button>
       <br />
       <button
       onClick={removeValue}
       >Remove Value</button>
    </>
  )
}

export default App
