import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [list, setList] = useState(data);



  return (
    <main>
      <section className='container'>
        {
          list.length === 0 &&
          <h3>
            0 birthdays today
          </h3>
        }
        <List list={list} />
        <button onClick={() => setList([])}>
          Clear List
        </button>
      </section>
    </main>
  );
}

export default App;
