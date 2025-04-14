import React from 'react';
import './Contato.css';

const Contato = () => {
  return (
    <div className='contato flex flex-col items-center'>
      <h2 className='contato-title flex justify-center text-green-500 text-5xl font-extrabold mb-20 m-20'>Contate-nos</h2>
      <form className='contato-form'>
        <input type="text" className='form-input' placeholder="Digite o seu nome completo.." required />
        <input type="email" className='form-input' placeholder="Digite o seu email" required />
        <textarea name="mensagem" placeholder='Digite o assunto e deixe a menssagem aqui' className='form-input'></textarea>
        <button className="contato-button">Enviar</button>
      </form>
    </div>
  )
}

export default Contato
