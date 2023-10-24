import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Question from './Question';
function App() {

  return (
    <main className='container'>
      <h3>
        Questions and Answers About Login
      </h3>
      <div>
        {
          data.map((question, index) => {
            return (
              <Question key={index} id={question.id} title={question.title} info={question.info} />
            )
          })
        }
      </div>
    </main>
  );
}

export default App;
