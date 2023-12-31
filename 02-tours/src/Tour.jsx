import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
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
              <button onClick={() => setReadMore(false)}>
                Show Less
              </button>
            </p>
            :
            <>
              {`${tour.info.slice(0, 100)}...`}
              <button onClick={() => setReadMore(true)}>
                Show More
              </button>
            </>
        }
        <button className="delete-btn" onClick={() => removeTour(tour.id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
