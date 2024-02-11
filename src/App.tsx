import './App.css'
import { useRoutes } from 'react-router-dom';
import MenuBar from "./components/ui/menuBar.tsx";
import ContentPage from './page/ContentPages/Content.tsx';
import SignIn from './page/SignInPage/SignIn.tsx';


function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <ContentPage/>,
    },
    {
      path: "/Signin",
      element: <SignIn/>,
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
