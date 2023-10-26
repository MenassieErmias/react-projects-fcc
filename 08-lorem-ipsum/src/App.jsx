import React, { useState } from 'react';
import data from './data';

function App() {
  const [numberOfP, setNumberOfP] = useState(0);
  const [lorem, setLorem] = useState([]);

  const generateLorem = () => {
    const loremArr = data.map((paragraph, index) => {
      return (
        <p className='result' key={index}>
          {paragraph}
        </p>
      )
    })
    if (numberOfP <= 0) {
      setLorem(loremArr.slice(0, 1));
    } else {
      let trimmedArr = loremArr.slice(0, numberOfP);
      setLorem(trimmedArr);
    }
  }
  return (
    (
      <main>
        <section className="section section-center">
          <h3>Tired of boring lorem ipsum?</h3>
          <form className="lorem-form">
            <label htmlFor="paragraphs">paragraphs</label>
            <input
              type="number"
              name="paragraphs"
              id="paragraphs"
              value={numberOfP}
              onChange={(e) => setNumberOfP(e.target.value)}
            />
            <button type='button' className="btn" onClick={generateLorem}>Generate</button>
          </form>
          {
            lorem
          }
        </section>
      </main>
    )
  )
}

export default App;
