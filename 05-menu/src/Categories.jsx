import React from 'react';

const Categories = ({ items, setCurrentCategory }) => {
  const getCategories = () => {
    const categories = []
    items.forEach((item) => {
      if (categories.includes(item.category)) {
        return
      } else {
        categories.push(item.category)
      }
    })
    return categories;
  }
  return (
    <section className="categories">
      <ul className='btn-container'>
        <li>
          <button className="filter-btn" onClick={() => setCurrentCategory('all')}>All</button>
        </li>
        {
          getCategories().map((category, index) => {
            return (
              <li key={index}>
                <button className='filter-btn' onClick={() => setCurrentCategory(category)}>{category}</button>
              </li>
            )
          })
        }

      </ul>
    </section>
  );
};

export default Categories;
