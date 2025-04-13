import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Sobre from './routes/Sobre'
import Depoimento from './routes/Depoimento'
import Error from './routes/Error'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/depoimento' element={<Depoimento/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
