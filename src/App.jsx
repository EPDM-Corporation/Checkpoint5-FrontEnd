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

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/Checkpoint5-FrontEnd/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/Checkpoint5-FrontEnd/sobre' element={<Sobre />} />
        <Route path='/Checkpoint5-FrontEnd/depoimento' element={<Depoimento />} />
        <Route path='/Checkpoint5-FrontEnd/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
