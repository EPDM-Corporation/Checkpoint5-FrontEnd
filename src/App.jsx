import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Sobre from './routes/Sobre'
import Depoimento from './routes/Depoimento'
import Error from './routes/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/depoimento' element={<Depoimento/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
