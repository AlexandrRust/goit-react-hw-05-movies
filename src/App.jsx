import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Movies } from 'pages/Movies';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { CastList } from 'components/CastList/CastList';
import { Reviews } from 'components/Reviews/Reviews';

const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Home = lazy(() => import('./pages/Home'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastList />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
