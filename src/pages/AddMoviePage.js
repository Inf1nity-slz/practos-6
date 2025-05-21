import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMoviePage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [country, setCountry] = useState('');
  const [actors, setActors] = useState('');

  const allCategories = [
    'Драма',
    'Комедия',
    'Ужасы',
    'Фантастика',
    'Мультфильм',
    'Боевик',
    'Приключения',
    'Романтика',
    'Триллер',
    'Документальный',
    'Музыкальный',
    'Семейный',
    'Вестерн',
    'Фэнтези',
    'Спортивный',
    'Криминал',
    'Мелодрама',
    'Полицейский',
    'Военный',
    'Экшен',
    'Хоррор',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || categories.length === 0) return;

    const newMovie = {
      id: Date.now(),
      title,
      categories,
      description,
      rating,
      year,
      director,
      country,
      actors,
    };

    const movies = JSON.parse(localStorage.getItem('movies') || '[]');
    movies.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(movies));

    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Добавить фильм</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Название:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>

        <label>
          Категории:
          <select
            multiple
            value={categories}
            onChange={(e) =>
              setCategories(Array.from(e.target.selectedOptions, (option) => option.value))
            }
          >
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label>
          Описание:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>

        <label>
          Оценка (1–10):
          <input
            type="number"
            min="1"
            max="10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>

        <label>
          Год выхода:
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>

        <label>
          Режиссёр:
          <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
        </label>

        <label>
          Страна:
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </label>

        <label>
          Актёры (через запятую):
          <input type="text" value={actors} onChange={(e) => setActors(e.target.value)} />
        </label>

        <div className="form-actions">
          <button type="submit">Сохранить</button>
          <button type="button" onClick={() => navigate('/')}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMoviePage;