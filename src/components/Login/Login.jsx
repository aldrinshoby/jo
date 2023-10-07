import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const[un,setUn]=useState('');
    const[pwd,setPwd]=useState('');
    const[error,setError]=useState(false);
const navigate=useNavigate();
    const readusername=(event) =>{ 
        event.preventDefault();
        console.log(event.target.value)
        setUn(event.target.value);
    }
    
        const readpassword=(event) =>{ 
          event.preventDefault(); 
            console.log(event.target.value)
        setPwd(event.target.value);
    }
    const checkfilldata=(event) =>{ 
        event.preventDefault();
   if(un.trim()===''|| pwd==='')
   {
    setError(true);
    return;
   }
   else
   { 
    navigate("/Home");
   }
}
    
  return (
    <div>
        <h1 align="center">Login</h1>
        <form className='aa'>
      Username<input type="text" onChange={readusername}/><br></br>
      Password<input type="password" onChange={readpassword}/><br></br>
      <button type="submit"onClick={checkfilldata}>LOGIN</button>
      </form>
      {error && 'nookkandada unni error aaa'}
    </div>
  )
}

export default Login
