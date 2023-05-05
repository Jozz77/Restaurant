import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage /> }> </Route>
        </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
