import { useState } from 'react'
import './App.css'
import MenuBar from "./components/ui/menuBar.tsx";
import ContentPage from './page/ContentPages/Content.tsx';

// function BearCounter() {
//   const bears = useBearStore((state:any) => state.bears)
//   return <h1>{bears} around here ...</h1>
// }

// function Controls() {
//   const increasePopulation = useBearStore((state:any) => state.increasePopulation)
//   return <button onClick={increasePopulation}>one up</button>
// }
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='mb-[24px]'>
      <MenuBar/>
      <ContentPage/>
    </div>
  )
}

export default App
