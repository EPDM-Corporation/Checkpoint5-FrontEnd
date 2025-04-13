import React from 'react'
import './Footer.css'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Youtube from '../../assets/Youtube.png'
import Linkedin from '../../assets/Linkedin.png'

const Footer = () => {
  return (
    <>
    <div className='footer-bg1'>
        <div className="footer-bg2"></div>
    </div>
    
    <footer className='bg-gray-900 max-w h-100 md:h-49 flex flex-col items-center'>
        <div className='
        md:flex
        md:justify-center
        md:items-center'>
            <div className='flex md:m-5'>
                <img src={Facebook} className='h-15 m-0 md:m-5' alt="" />
                <img src={Instagram}className='h-15 m-0 md:m-5'alt="" />
                <img src={Youtube} className='h-15 m-0 md:m-5' alt="" />
                <img src={Linkedin} className='h-15 m-0 md:m-5' alt="" />
            </div>
            <div className='m-5'>
                <div className='text-white'>Contatos</div>
                <div className='text-white'>Email: melodia@gmail.com</div>
                <div className='text-white'>Telefone: (11) 98765-4321</div>
            </div>
        </div>
        <div className='text-white'>© Projeto Melodia - Todos os direitos reservados</div>
    </footer>
    </>
  )
}

export default Footer
