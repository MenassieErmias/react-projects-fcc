import { useState, useEffect } from 'react';
import Review from './Review';
import reviews from './data';

function App() {
  const [review, setReview] = useState(reviews[0]);

  // useEffect(() => { setReview(reviews[0]) }, []);

  const handleNext = () => {
    const currIndex = reviews.indexOf(review);
    setReview(reviews[currIndex + 1] ? reviews[currIndex + 1] : reviews[0]);
  }

  const handlePrev = () => {
    const currIndex = reviews.indexOf(review);
    setReview(reviews[currIndex - 1] ? reviews[currIndex - 1] : reviews[reviews.length - 1]);
  }

  const handleRand = () => {
    let randIndex = Math.floor(Math.random() * reviews.length);
    const currIndex = reviews.indexOf(review);

    console.log(randIndex)

    if (randIndex == currIndex && randIndex < reviews.length - 1) {
      randIndex++;
    } else if (randIndex == currIndex && randIndex >= reviews.length - 1) {
      randIndex--;
    }
    setReview(reviews[randIndex]);
  }

  return (
    <main>
      <h2>Our Reviews</h2>
      <div className='container'>
        <Review review={review} />
        <div className='buttons'>
          <button onClick={handlePrev} className='prev-btn'>&lt;</button>
          <button onClick={handleNext} className='next-btn'>&gt;</button>
        </div>
        <div className='rand-btn-container'>
          <button onClick={handleRand} className='random-btn'>Surprise Me</button>
        </div>
      </div>
    </main>
  );
}

export default App;
