import './App.css'
import { useRoutes } from 'react-router-dom';
import MenuBar from "./components/ui/menuBar.tsx";
import ContentPage from './page/ContentPages/Content.tsx';
import SignIn from './page/SignInPage/SignIn.tsx';
import useBearStore from '../store.ts'
import { useState } from 'react'
 function BearCounter() {
    const bears = useBearStore((state:any) => state.bears)
    return <h1>{bears} around here ...</h1>
  }
  
  function Controls() {
    const [count, setCount] = useState(0)
    const increasePopulation = useBearStore((state:any) => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
  }

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
      <Controls/>
      <BearCounter/>
      {element}
    </div>
  )
}

export default App
