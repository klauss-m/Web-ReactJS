import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1
        style={{
          color: 'red',
          fontSize: '50px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: '50px',
        }}
      >
        Contador de Pessoas
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
          width: '100px',
          border: '1px solid black',
          backgroundColor: '#f0f0f0',
        }}
      >
        <p
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#000',
            margin: '0',
            padding: '0',
          }}
        >
          {count}
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            backgroundColor: '#f0f0f0',
            border: '1px solid black',
            padding: '10px',
            margin: '10px',
            width: '100px',
            height: '50px',
          }}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          style={{
            backgroundColor: '#f0f0f0',
            border: '1px solid black',
            padding: '10px',
            margin: '10px',
            width: '100px',
            height: '50px',
          }}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
