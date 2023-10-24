import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
  return (
    <main>
      {
        tours.map(tour => (
          <Tour key={tour.id} tour={tour} />
        ))
      }
    </main>
  );
};

export default Tours;
