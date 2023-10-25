import React from 'react';

const Menu = ({ items, currentCategory }) => {
  return (
    <section className="menu">
      <ul className='section-center'>
        {
          currentCategory === 'all' ?
            items.map((item, index) => {
              return (
                <li className="menu-item ">
                  <img className='photo' src={item.img} alt={item.title} />
                  <div className="item-info">
                    <header>
                      <h4>{item.title}</h4>
                      <p className="price">${item.price}</p>
                    </header>
                    <p className="item-text">
                      {item.desc}
                    </p>
                  </div>
                </li>
              )
            }) :

            items.map((item) => {
              if (item.category === currentCategory) {
                return (
                  <li className="menu-item ">
                    <img className='photo' src={item.img} alt={item.title} />
                    <div className="item-info">
                      <header>
                        <h4>{item.title}</h4>
                        <p className="price">${item.price}</p>
                      </header>
                      <p className="item-text">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                )
              } else {
                return
              }
            })
        }
      </ul>
    </section>
  );
};

export default Menu;
