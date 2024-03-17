import { User } from './components/context/User'
import { UserContextProvider } from './components/context/UserContext'
import './App.css'

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  )
}

export default App
