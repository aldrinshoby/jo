import React from 'react'
import './Transferdata.css'
const Transferdata = (props) => {
  return (
    <div>
     <h1 className='aa'>welcome</h1>
     <p>
       Username : { props.username}
         <br></br>
         Password : {props.password}
         <br></br>
         Usertype : {props.usertype}
     </p>
    </div>
  )
}

export default Transferdata
