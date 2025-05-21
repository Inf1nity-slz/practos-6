import React, { useEffect, useState } from 'react';

const CategoryFilter = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    onFilterChange(selectedCategories);
  }, [selectedCategories, onFilterChange]);

  return (
    <div className="category-filter">
      <label>Фильтр по категории:</label>
      <select
    multiple
    value={selectedCategories}
    onChange={(e) =>
        setSelectedCategories(
        Array.from(e.target.selectedOptions).map((option) => option.value)
        )
    }
    className="category-select"
>
    <option value="all">Все</option>
    {categories.map((cat, index) => (
        <option key={index} value={cat}>
            {cat}
        </option>
    ))}
        </select>
    </div>
  );
};

export default CategoryFilter;