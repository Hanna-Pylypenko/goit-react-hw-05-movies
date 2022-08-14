import { Route, Routes } from 'react-router-dom';
import { HomeView } from '../pages/HomeView';
import { MoviesView } from '../pages/MoviesView';
import React from 'react';
import { MovieDetails } from './MovieDetailes/MovieDetails';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Cast } from './Cast/Cast';
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
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeView />} />
          <Route path="movies/" element={<MoviesView />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path=":cast" element={<Cast />} />
            {/* <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path="*" element={<HomeView />} />
        </Route>
      </Routes>
    </div>
  );
};
