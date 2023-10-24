import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({ review }) => {
  return (
    <article className='review'>
      <div className="img-container">
        <div className="quote-icon"></div>
        <img className='person-img' src={review.image} alt={review.name} />
      </div>
      <h3 className='author'>{review.name}</h3>
      <p className='job'>{review.job}</p>
      <p className='info'>{review.text}</p>
    </article>
  );
};

export default Review;
