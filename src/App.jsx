import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Component from './Component'
import BlogList from './BlogList'
import BlogPost from './BlogPost'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Component />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
