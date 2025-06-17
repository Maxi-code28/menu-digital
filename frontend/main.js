import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles.css';

const Menu = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error al obtener el menú:', error));
  }, []);

  const filteredItems = category === 'all' ? items : items.filter(item => item.category === category);

  return (
    <div className="menu">
      <h1>Menú del Restaurante</h1>
      <div className="filters">
        <button onClick={() => setCategory('all')}>Todos</button>
        <button onClick={() => setCategory('entradas')}>Entradas</button>
        <button onClick={() => setCategory('principales')}>Platos Principales</button>
        <button onClick={() => setCategory('postres')}>Postres</button>
      </div>
      <div className="menu-items">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<Menu />, document.getElementById('root'));