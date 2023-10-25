import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [currentCategory, setCurrentCategory] = useState('breakfast');

  return (
    <main>
      <h1 className='title'>Our Menu</h1>
      <Categories setCurrentCategory={setCurrentCategory} items={items} />
      <Menu currentCategory={currentCategory} items={items} />
    </main>
  );
}

export default App;
