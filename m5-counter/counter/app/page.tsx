'use client';
import { useState } from 'react';

// IMPORTANTE: En Next.js, el componente de la página DEBE llamarse "page" (o exportarse por defecto)
export default function Page() {
  const [count, setCount] = useState(0);
  const [maxLimit, setMaxLimit] = useState(10);

  const handleAddTen = () => {
    if (count + 10 > maxLimit) {
      setCount(maxLimit);
    } else {
      setCount(count + 10);
    }
  };

  const isMaxReached = count >= maxLimit;
  const isMinReached = count === 0;

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <h1>M5 — Contador con useState</h1>
      <hr style={{ marginBottom: '20px' }} />
      
      <h2>Contador: {count}</h2>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Límite Máximo: </label>
        <input 
          type="number" 
          value={maxLimit} 
          onChange={(e) => setMaxLimit(Number(e.target.value))}
          style={{ padding: '5px', width: '100%' }}
        />
      </div>

      {isMaxReached && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>¡Llegaste al límite!</p>
      )}

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setCount(count - 1)} disabled={isMinReached} style={{ padding: '10px 15px' }}>
          -
        </button>
        <button onClick={() => setCount(count + 1)} disabled={isMaxReached} style={{ padding: '10px 15px' }}>
          +
        </button>
        <button onClick={() => setCount(0)} style={{ padding: '10px 15px' }}>
          Reset
        </button>
        <button onClick={handleAddTen} disabled={isMaxReached} style={{ padding: '10px 15px' }}>
          Sumar 10
        </button>
      </div>
    </main>
  );
}