import { ThemeProvider } from '@mui/material'
import './App.css'
import Home from './components/Home'
import theme from './components/theming'

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <Home />
    </ThemeProvider>
    </>
    
  )
}

export default App
