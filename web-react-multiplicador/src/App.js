import React, { useState } from 'react';

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleMultiplication = () => {
    setResult(num1 * num2);
  };

  const submitClear = () => {
    setNum1(0);
    setNum2(0);
    setResult(0);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#000',
        }}
      >
        Multiplicador de Números
      </h1>
      <input
        style={{
          width: '100px',
          height: '3rem',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#000',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '1rem',
        }}
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        style={{
          width: '100px',
          height: '3rem',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#000',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '1rem',
        }}
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '40%',
        }}
      >
        <button
          style={{
            width: '220px',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#328c59',
            border: 'none',
            borderRadius: '5px',
          }}
          onClick={handleMultiplication}
        >
          Multiplicar
        </button>
        <button
          style={{
            width: '220px',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#8c3241',
            border: 'none',
            borderRadius: '5px',
          }}
          onClick={submitClear}
        >
          Limpar
        </button>
      </div>
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#000',
        }}
      >
        {result}
      </h1>
    </div>
  );
}
