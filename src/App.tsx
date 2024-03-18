import './App.css'
import { RandomNumber } from './components/restriction/RandomNumber'

function App() {
  return (
    <div className='App'>
      <RandomNumber value={10} isPositive isNegative isZero />
    </div>
  )
}

export default App
