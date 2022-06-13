import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Error from './components/Error/Error'
import Loader from './components/Loader/Loader'
import { DataContextProvider } from './context/dataContext'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <Router>
    <DataContextProvider>
      <App />
      <Loader />
      <Error />
    </DataContextProvider>
  </Router>,
)
