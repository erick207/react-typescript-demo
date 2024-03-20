import './App.css'
import { Text } from './components/polymorphic/Text'

function App() {
  return (
    <div className='App'>
      <Text size='lg'>Heading</Text>
      <Text size='md'>Paragraph</Text>
      <Text size='sm' color='secondary'>
        Label
      </Text>
    </div>
  )
}

export default App
