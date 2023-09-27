// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cidades, setCidades] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    axios.get('/cidades') // Esta rota corresponde à rota definida no servidor
      .then((response) => {
        setCidades(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar cidades:', error);
      });
  }, []);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const handleCloseClick = () => {
    setSelectedCity(null);
  };

  return (
    <div className="App">
      <h1>Lista de Cidades</h1>
      <ul>
        {cidades.map((city) => (
          <li key={city.id} onClick={() => handleCityClick(city)}>
            {city.nome}
          </li>
        ))}
      </ul>

      {selectedCity && (
        <div className="city-info">
          <h2>{selectedCity.nome}</h2>
          <img src={selectedCity.foto} alt={selectedCity.nome} />
          <p>{selectedCity.texto}</p>
          <button onClick={handleCloseClick}>Fechar</button>
        </div>
      )}
    </div>
  );
}

export default App;

