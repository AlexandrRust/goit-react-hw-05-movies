import { apiMoviesTranding } from 'services/api-movies';
import { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesList } from 'components/MovieList/MovieList';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  useEffect(() => {
    apiMoviesTranding().then(({ data }) => setResults(data.results));
  }, []);
  return (
    <>
      <h1>Tranding today</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList state={{ from: location }} results={results} />
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default Home;
