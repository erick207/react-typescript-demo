import './App.css'
import { Text } from './components/polymorphic/Text'

function App() {
  return (
    <div className='App'>
      {/* We don't want them all to be divs, we want to be able to tell what component they will be with the 'as' prop, also 
      to be able to pass specific props to each one*/}
      <Text as='h1' size='lg'>
        Heading
      </Text>
      <Text as='p' size='md'>
        Paragraph
      </Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>
        Label
      </Text>
    </div>
  )
}

export default App
