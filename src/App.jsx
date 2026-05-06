import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Pages/Menu/Menu'
import Home from "./Pages/Home/Home"

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
