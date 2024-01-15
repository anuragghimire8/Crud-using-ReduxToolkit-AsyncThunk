import React from 'react'
import Navbar from "./Components/Navbar"
import Create from "./Components/Craete"
import {BrowserRouter,Routes,Route} from "react-router-dom"


const App = () => {
  return (
    <div>
    <BrowserRouter>  
    <Navbar/>
<Routes>
<Route path='/create' element={<Create/>}/>
</Routes>
    </BrowserRouter>
  
     
    </div>
  )
}

export default App
