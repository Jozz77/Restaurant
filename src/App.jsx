import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./HomePage/HomePage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage /> }> </Route>
        </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
