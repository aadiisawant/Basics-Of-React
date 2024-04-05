
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import UsersList from './components/UsersList'

function App() {
  
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout />,
      children:[
        {
          path :'users',
          element: <UsersList />
         
        }
      ]
      
    }
  ])

  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}

export default App
