import './App.css'
import LineChart from './Components/LineChart/LineChart'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import PieCharts from './Components/PieChart/PieCharts'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {
  
  return (
    <>
    <NavBar></NavBar>
    <PieCharts></PieCharts>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-5xl bg-orange-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      <PieCharts></PieCharts>
    </>
  )
}

export default App
