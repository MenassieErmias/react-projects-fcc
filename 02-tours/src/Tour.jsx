import React, { useState } from 'react';

const Tour = ({ tour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <p className='tour-price'>${tour.price}</p>
        </div>
        {
          readMore ?
            <p>
              {tour.info}
            </p>
            :
            <>
              {tour.info.slice(0, 100)}
              <button onClick={() => setReadMore(true)}>...</button>
            </>
        }
        <button className="delete-btn">
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
