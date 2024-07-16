
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Tryout from './pages/Tryout'
import Nav from './components/Nav'

function App() {
  
    return(
      <>
      
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About}/>
        <Route path="/tryout" Component={Tryout} />
      </Routes>
      
      
      </>
    )
}

export default App
