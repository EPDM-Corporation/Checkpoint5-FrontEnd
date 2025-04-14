import React from 'react';
import './Sobre.css';

export default function Sobre() {
  return (
    <div className="sobre-container">
      <main className="sobre-main">
        <h1 className="sobre-title">Sobre</h1>
        <p className="sobre-description">
          Chega de playlists sem graça ou músicas parando no meio do rolê.
          <br />
          Nosso app é a plataforma de streaming feita pra quem ama festa de verdade.
          Seja na resenha com os amigos, no after ou na balada em casa, a gente entrega a trilha sonora perfeita
          sem complicação e com muito estilo.
          <br />
          <strong className='text-green-600'>Por que a galera tá usando?</strong>
        </p>

        <ul className="sobre-list">
          <li><span>✔</span> Modo Festa automático: mixagens suaves, nada de silêncio entre as músicas.</li>
          <li><span>✔</span> Playlists prontas pro rolê: funk, pop, eletrônico, retrô, sertanejo — só escolher o clima.</li>
          <li><span>✔</span> Convidados no controle: seus amigos podem sugerir ou votar nas próximas faixas.</li>
          <li><span>✔</span> Som de respeito: áudio de alta qualidade que faz as caixas tremerem.</li>
          <li><span>✔</span> Offline também é festa: sem internet! Sem problema. Baixe tudo antes e toca o terror.</li>
          <li><span>✔</span> Luz e som sincronizados: conecte com luzes inteligentes e crie uma experiência surreal.</li>
        </ul>
      </main>

      <footer className="sobre-footer"></footer>

    </div>
  );
}
