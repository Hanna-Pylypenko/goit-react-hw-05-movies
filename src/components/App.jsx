import { Route, Routes } from 'react-router-dom';
import { Container } from './Container/Container';
import { AppBar } from './AppBar/AppBar';
import { Home } from '../pages/Home';
import { Movies } from './Movies/Movies';
import React from 'react';
import { MovieDetails } from './MovieDetailes/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {' '}
      <Container>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
};
