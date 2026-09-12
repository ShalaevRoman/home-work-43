import { AppProvider } from './context/AppContext'
import { Dashboard } from './components'
import './App.css'

function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  )
}

export default App
