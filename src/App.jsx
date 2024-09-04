import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'  // Correct import
import Home from './Components/Home'
import English from './Components/English/English'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/English" element={<English />} />
          {/* <Route path="/CreateNew" element={<CreateNew />} />
          <Route path="/MyQuiz" element={<MyQuiz />} />
          <Route path="/PlayQuiz" element={<PlayQuiz/>} />
          <Route path="/Quiz" element={<Quiz/>} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
