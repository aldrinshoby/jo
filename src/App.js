//  import Transferdata from "./components/Transferdata";
//  import Login from './components/Login/Login';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Logindata from "./components/Logindata";
import Home from './components/Home/Home';
import Book from './components/Book/Book';

// import Course from "./components/Course/Course";
function App() {
  return (
    <div>
     {/* <Transferdata username="Aldrin"password="03052003"usertype="root"/>  
     <Login></Login>
     <Course></Course> */}
     <BrowserRouter> 
      <Routes>
        <Route path={'/'}element={<Login/>}></Route>
        <Route path={'/Ldata'}element={<Logindata/>}></Route>
        <Route path={'/Home'} element={<Home/>}></Route>
        <Route path={'/Book'} element={<Book/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
