
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import NoPage from './components/NoPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'blogs',
          element: <Blogs />
        }
      ]
      
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout/>}>
    //       <Route index element={<Home/>} />
    //       <Route path='blogs' element={<Blogs />} />
    //       <Route path='contact' element={<Contact />} />
    //       <Route path='*' element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>  
  )
}

export default App
