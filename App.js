import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' }
  ];

  return (
    <div>
      <NavBar brand="My Shop" categories={categories} />
      <ItemListContainer greeting="Welcome to our shop!" />
    </div>
  );
}

export default App;
