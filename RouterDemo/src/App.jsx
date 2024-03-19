
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import NoPage from './components/NoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  )
}

export default App
