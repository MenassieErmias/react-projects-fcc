import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>
          {title}
        </h4>
        <button type='button' onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <div className='answer'>
        <p>
          {info}
        </p>
      </div>}
    </article>
  );
};

export default Question;
