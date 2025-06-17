// Accede a React, ReactDOM y Axios desde las variables globales
const { useState, useEffect } = React;
const ReactDOM = window.ReactDOM;
const axios = window.axios;

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
    React.createElement('div', { className: 'menu' },
      React.createElement('h1', null, 'Menú del Restaurante'),
      React.createElement('div', { className: 'filters' },
        React.createElement('button', { onClick: () => setCategory('all') }, 'Todos'),
        React.createElement('button', { onClick: () => setCategory('entradas') }, 'Entradas'),
        React.createElement('button', { onClick: () => setCategory('principales') }, 'Platos Principales'),
        React.createElement('button', { onClick: () => setCategory('postres') }, 'Postres')
      ),
      React.createElement('div', { className: 'menu-items' },
        filteredItems.map(item =>
          React.createElement('div', { key: item.id, className: 'menu-item' },
            React.createElement('h3', null, item.name),
            React.createElement('p', null, item.description),
            React.createElement('p', null, '$' + item.price)
          )
        )
      )
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Menu));