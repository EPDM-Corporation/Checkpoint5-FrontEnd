import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contato from './routes/Contato'
import Depoimento from './routes/Depoimento'
import Error from './routes/Error'
import Home from './routes/Home'
import Sobre from './routes/Sobre'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (

    <BrowserRouter basename="/Checkpoint5-FrontEnd">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/depoimento' element={<Depoimento />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
