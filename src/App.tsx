import './App.css'
import { Button } from './components/Button'
import { Container } from './components/Container'
import { Input } from './components/Input'

function App() {
  return (
    <div className='App'>
      <Container
        styles={{ border: '10px dashed peachpuff', padding: '1rem' }}
      />
    </div>
  )
}

export default App
