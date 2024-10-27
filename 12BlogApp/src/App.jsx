 
import { useState, useEffect,} from 'react'
import {Provider, useDispatch} from 'react-redux';
import authService from './appwrite/auth';
import './App.css'
import {login, logout} from './store/authSlice';
import { Header,Footer } from './components';


function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();


  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout());
      }
    })
    .catch((err)=>console.log(err))
    .finally(()=> setLoading(false))
  },[])
 
  
  return !loading ? (
   <>
   <div className='min-h-screen flex flex-wrap content-between bg-black text-yellow-300 font-serif cent'>
    <div className='w-full block'>
      <Header/>
      <main>
        TODO: {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
   </div>
   </>

  ) : (null)
}

export default App
