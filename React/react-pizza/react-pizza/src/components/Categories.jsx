import React, { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div>
      <div className="categories">
        <ul>
          {categories.map((item, i) => (
            <li
              key={i}
              className={activeIndex === i ? 'active' : ''}
              onClick={() => setActiveIndex(i)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
