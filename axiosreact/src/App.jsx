
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostsData from './components/PostsData'
import Layout from './components/Layout'
import CommentsData from './components/CommentsData'
import GitHub, { GithubInfo } from './components/GitHub'
const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout />,
    children : [
      {
        path : '',
        element: <PostsData />
      },
      {
        path : 'posts',
        element: <PostsData />
      },
      {
        path : 'comments',
        element: <CommentsData />
      },
      {
        loader: GithubInfo,
        path : 'github',
        element: <GitHub />
      }
    ]
  }
])
function App() {
  return (
    <>
      <RouterProvider  router={router}/>
      
    </>
  )
}

export default App
