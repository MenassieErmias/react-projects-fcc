import React from 'react';

const List = ({ list }) => {




  return (
    <ul>
    
      {
        list.map((item)=>(
          <li className='person'>
            <img src={item.image} />
            <h4>{item.name}</h4>
            <p>{item.age} years</p>
          </li>
        ))
      }
    </ul>
  );
};

export default List;
