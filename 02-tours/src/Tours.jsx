import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <main>

      {
        tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        ))
      }
    </main>
  );
};

export default Tours;
