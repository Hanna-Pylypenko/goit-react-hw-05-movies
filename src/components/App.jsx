import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const HomeView = lazy(() => import('../pages/HomeView'));
const MoviesView = lazy(() => import('../pages/MoviesView'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
      <Suspense fallback={Loading.pulse()}>
        <Routes>
          <Route
            path="/"
            element={<SharedLayout />}
            fallback={Loading.remove()}
          >
            <Route index element={<HomeView />} />
            <Route path="movies/" element={<MoviesView />} />

            <Route path="movies/:slug" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<HomeView />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
