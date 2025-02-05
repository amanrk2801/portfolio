import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Component from './Component'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Component />} />
      </Routes>
    </Router>
  )
}

export default App
