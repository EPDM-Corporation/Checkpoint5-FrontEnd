import React from 'react'

import daciolo from '../assets/daciolo.png'
import igao from '../assets/igao.png'
import clovis from '../assets/kidbengala.png'
import neymar from '../assets/neymarjr.png'

const Depoimento = () => {
  const Depoimentos = [
    { name: "Clóvis Basílio", image: clovis, quote: "Trilha sonora perfeita pra esquentar qualquer clima." },
    { name: "Neymar Junior", image: neymar, quote: "Tenho uma quedinha por todas essas músicas" },
    { name: "Cabo Daciolo", image: daciolo, quote: "Além de ótimas músicas tem excelentes louvores. GLÓRIA A DEUS" },
    { name: "Igão", image: igao, quote: "'Tamo ouvindo músicas ‘tamo ouvindo músicas?’" },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-24 px-8 text-center p-100">
      <h1 className="text-green-500 text-5xl font-extrabold mb-20">Depoimentos dos nossos clientes!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {Depoimentos.map((t, i) => (
          <div
            key={i}
            className="bg-gray-200 text-black rounded-3xl p-10 shadow-2xl flex items-start space-x-8 transform hover:scale-[1.02] transition duration-300"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-black"
            />
            <div className="text-left">
              <p className="font-bold text-2xl">-{t.name}</p>
              <p className="mt-4 text-lg font-medium leading-relaxed">“{t.quote}”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Depoimento;
