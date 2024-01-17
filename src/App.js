import React from 'react'
import Navbar from "./Components/Navbar"
import Create from "./Components/Craete"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Read from './Components/Read'
import Edit from './Components/Edit'



const App = () => {
  return (
    <div>
    <BrowserRouter>  
    <Navbar/>
<Routes>
<Route path='/create' element={<Create/>}/>
<Route path="/read" element={<Read/>}/>
<Route path='/edit/:id' element={<Edit/>}/>

</Routes>
    </BrowserRouter>
  
     
    </div>
  )
}

export default App
