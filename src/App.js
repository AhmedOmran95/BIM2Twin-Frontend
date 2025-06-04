import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://bim2twin-backend.onrender.com/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>BIM2Twin Digital Solutions </h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
