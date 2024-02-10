import './App.css'
import { useRoutes } from 'react-router-dom';
import MenuBar from "./components/ui/menuBar.tsx";
import ContentPage from './page/ContentPages/Content.tsx';
import Signin from './page/SigninPage/Signin.tsx';


function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <ContentPage/>,
    },
    {
      path: "/Signin",
      element: <Signin/>,
    },
  ])
  return (
    <div className='mb-[24px]'>
      <MenuBar/>
      {element}
    </div>
  )
}

export default App
