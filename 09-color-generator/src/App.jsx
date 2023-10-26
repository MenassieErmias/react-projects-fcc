import React, { useState } from 'react'
import SingleColor from './SingleColor'
import rgbToHex from './utils';
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([]);

  const generateColors = () => {
    try {
      const colorVal = new Values(color);
      setColors(colorVal.all());
    } catch (error) {
      console.log(error);
      alert('Invalid input')
    }

  }
  return (
    <main>
      <section className="section">
        <div className="container">
          <h3>Color Generator</h3>
          <input
            type="text"
            name='color'
            id='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className='btn' onClick={generateColors}>Submit</button>
        </div>
        <section className="colors">
          {
            colors.map((color, index) => {
              return (
                <SingleColor key={index} color={color} />
              )
            })
          }
        </section>
      </section>
    </main>
  )
}

export default App
