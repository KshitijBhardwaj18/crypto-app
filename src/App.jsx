import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/"/>
      <Route path="/coin/:id"/>
      
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
