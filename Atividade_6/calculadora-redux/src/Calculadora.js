import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { somar, subtrair, multiplicar, dividir } from './actions/calculadora';

const Calculadora = () => {
  const [numero, setNumero] = useState('');
  const dispatch = useDispatch();
  const resultado = useSelector((state) => state.calculadora.resultado);

  const handleNumeroChange = (e) => {
    setNumero(e.target.value);
  };

  return (
    <div>
      <input type="text" value={numero} onChange={handleNumeroChange} />
      <button onClick={() => dispatch(somar(Number(numero)))}>Somar</button>
      <button onClick={() => dispatch(subtrair(Number(numero)))}>Subtrair</button>
      <button onClick={() => dispatch(multiplicar(Number(numero)))}>Multiplicar</button>
      <button onClick={() => dispatch(dividir(Number(numero)))}>Dividir</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
};

export default Calculadora;
