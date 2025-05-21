import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditMoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [country, setCountry] = useState('');
  const [actors, setActors] = useState('');

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies') || '[]');
    const movie = movies.find((m) => m.id === Number(id));
    if (movie) {
      setTitle(movie.title);
      setCategories(movie.categories || []);
      setDescription(movie.description || '');
      setRating(movie.rating || '');
      setYear(movie.year || '');
      setDirector(movie.director || '');
      setCountry(movie.country || '');
      setActors(movie.actors || '');
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movies = JSON.parse(localStorage.getItem('movies') || '[]');
    const updated = movies.map((m) =>
      m.id === Number(id)
        ? {
            ...m,
            title,
            categories,
            description,
            rating,
            year,
            director,
            country,
            actors,
          }
        : m
    );
    localStorage.setItem('movies', JSON.stringify(updated));
    navigate('/');
  };

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

  return (
    <div className="form-container">
      <h2 className="form-title">Редактировать фильм</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Название фильма</label>
          <input
            type="text"
            placeholder="Название фильма"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Категории:</label>
          <select
            multiple
            value={categories}
            onChange={(e) =>
              setCategories(
                Array.from(e.target.selectedOptions).map((option) => option.value)
              )
            }
            className="form-control"
          >
            {allCategories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Описание фильма</label>
          <textarea
            placeholder="Описание фильма"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Оценка (от 1 до 10)</label>
          <input
            type="number"
            placeholder="Оценка"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Год выхода</label>
          <input
            type="number"
            placeholder="Год выхода"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Режиссёр</label>
          <input
            type="text"
            placeholder="Режиссёр"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Страна</label>
          <input
            type="text"
            placeholder="Страна"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Актёры (через запятую)</label>
          <input
            type="text"
            placeholder="Актёры"
            value={actors}
            onChange={(e) => setActors(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="form-control">Сохранить</button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="form-control"
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMoviePage;