import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



  const Book = () => {
    const[bk,setBk]=useState('');
    const[au,setAu]=useState('');
    const[pb,setPb]=useState(''); 
    const[error,setError]=useState(false);
    const navigate=useNavigate();

    const readbookname=(event) =>{ 
        event.preventDefault();
        console.log(event.target.value)
        setBk(event.target.value);
    }
    
        const readAuthor=(event) =>{ 
          event.preventDefault(); 
            console.log(event.target.value)
        setAu (event.target.value);
    }
    const readpublisher=(event) =>{ 
        event.preventDefault();
        console.log(event.target.value)
        setPb(event.target.value);
    }
    const checkfilldata=(event) =>{ 
        event.preventDefault();
   if(bk.trim()===''|| au.trim()==='')
   {
    setError(true);
    return;
   }
   else
   { 
    navigate("/home ");
   }
}
    
  return (
    <div>
        
    <div className='main'>
        Book Name:<input type="text"onChange={readbookname}></input><br></br>
      Author :<input type="text"onChange={readpublisher}></input><br></br>
      Publisher :<input type="text"onChange={readAuthor}></input><br></br>
      <button type="submit"onClick={checkfilldata}>SAVE</button>
      {error && 'nookkandada unni error aaa'}
    </div>
    </div>
  )
}

export default Book
