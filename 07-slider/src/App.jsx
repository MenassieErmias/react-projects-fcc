import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [currIndex, setCurrIndex] = useState(0);

  const handlePrev = () => {
    if (currIndex === 0) {
      setCurrIndex(data.length - 1);
    } else {
      setCurrIndex(prev => prev - 1);
    }
  }

  const handleNext = () => {
    if (currIndex === data.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(prev => prev + 1);
    }
  }
  return (
    <section className="section">
      <header className="title">
        <h2><span>\</span>  Reviews</h2>
      </header>
      <div className="section-center">
        <button className="prev" onClick={handlePrev}><FiChevronLeft /></button>
        {
          data.map((person) => {
            if (data.indexOf(person) === currIndex) {
              const { id, image, name, title, quote } = person;
              return (
                <article key={id}>
                  <img src={image} alt={name} className='person-img' />
                  <h4>{name}</h4>
                  <h3 className="title">{title}</h3>
                  <p className="text">{quote}</p>
                </article>
              )
            }
          })
        }
        <button className='next' onClick={handleNext}><FiChevronRight /></button>
      </div>
      <div className='icon-container'>
        <FaQuoteRight className='icon' />
      </div>
    </section>
  );
}

export default App;
