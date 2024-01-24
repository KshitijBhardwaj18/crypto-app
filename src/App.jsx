import {BrowserRouter, Routes, Route} from "react-router-dom"
import CryptoDetail from "./pages/CryptoDetail"
import CryptoHome from "./pages/CryptoDetail"

function App() {
  

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CryptoHome/>}/>
      <Route path="/coin/:id" element={<CryptoDetail/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
