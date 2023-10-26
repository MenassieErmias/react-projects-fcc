import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [currIndex, setCurrIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(data.length - 1);

  const handlePrev = () => {
    if (currIndex === 0) {
      setCurrIndex(data.length - 1);
      setPrevIndex(data.length - 2);
    } else {
      setCurrIndex(prev => prev - 1);
      setPrevIndex(prev => prev - 1 >= 0 ? prev - 1 : data.length - 1);
    }

    console.log(`pressed prev,\nprev: ${prevIndex}\ncurr: ${currIndex}`)
  }

  const handleNext = () => {
    if (currIndex === data.length - 1) {
      setCurrIndex(0);
      setPrevIndex(data.length - 1);
    } else {
      setCurrIndex(prev => prev + 1);
      setPrevIndex(prev => prev + 1 < data.length ? prev + 1 : 0);
    }
    console.log(`pressed next,\nprev: ${prevIndex}\ncurr: ${currIndex}`)
  }
  return (
    <section className="section">
      <header className="title">
        <h2><span>\</span>  Reviews</h2>
      </header>
      <div className="section-center">
        {
          data.map((person) => {
            if (true) {
              const { id, image, name, title, quote } = person;
              return (
                <article
                  key={id}
                  className={
                    data.indexOf(person) === currIndex ? 'activeSlide' :
                      data.indexOf(person) === prevIndex ? 'prevSlide' :
                        "nextSlide"
                  }
                >
                  <img src={image} alt={name} className='person-img' />
                  <h4>{name}</h4>
                  <h3 className="title">{title}</h3>
                  <p className="text">{quote}</p>
                </article>
              )
            }
          })
        }
        <button className="prev" onClick={handlePrev}><FiChevronLeft /></button>

        <button className='next' onClick={handleNext}><FiChevronRight /></button>
      </div>
      <div className='icon-container'>
        <FaQuoteRight className='icon' />
      </div>
    </section>
  );
}

export default App;
