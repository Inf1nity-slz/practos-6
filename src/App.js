import './App.css';
import React, { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Форсаж' },
    { id: 2, title: 'Интерстеллар' },
    { id: 3, title: 'Матрица' },
  ]);

  const addMovie = (title) => {
    if (!title.trim()) return;
    const newMovie = {
      id: Date.now(),
      title,
    };
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const editMovie = (id, newTitle) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, title: newTitle } : movie
      )
    );
  };

  const AddMovieForm = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      addMovie(title);
      setTitle('');
    };

    return React.createElement(
      'form',
      { onSubmit: handleSubmit, className: 'add-movie-form' },
      React.createElement('input', {
        type: 'text',
        value: title,
        onChange: (e) => setTitle(e.target.value),
        placeholder: 'Введите название фильма',
        required: true,
      }),
      React.createElement('button', { type: 'submit' }, 'Добавить')
    );
  };

  const MovieList = () => {
    const [editingId, setEditingId] = useState(null);
    const [newTitle, setNewTitle] = useState('');

    const handleEditClick = (movie) => {
      setEditingId(movie.id);
      setNewTitle(movie.title);
    };

    const handleSaveClick = (id) => {
      editMovie(id, newTitle);
      setEditingId(null);
    };

    return React.createElement(
      'ul',
      { className: 'movie-list' },
      movies.map((movie) =>
        React.createElement(
          'li',
          { key: movie.id, className: 'movie-item' },
          editingId === movie.id
            ? [
                React.createElement('input', {
                  type: 'text',
                  value: newTitle,
                  onChange: (e) => setNewTitle(e.target.value),
                  key: 'input',
                }),
                React.createElement(
                  'button',
                  {
                    key: 'save',
                    onClick: () => handleSaveClick(movie.id),
                  },
                  'Сохранить'
                ),
              ]
            : [
                React.createElement('span', { key: 'title' }, movie.title),
                React.createElement(
                  'button',
                  {
                    key: 'edit',
                    onClick: () => handleEditClick(movie),
                  },
                  'Редактировать'
                ),
                React.createElement(
                  'button',
                  {
                    key: 'delete',
                    onClick: () => deleteMovie(movie.id),
                  },
                  'Удалить'
                ),
              ]
        )
      )
    );
  };

  return React.createElement(
    'div',
    { className: 'app' },
    React.createElement('h1', null, 'Мои любимые фильмы'),
    AddMovieForm(),
    MovieList()
  );
}

export default App;


