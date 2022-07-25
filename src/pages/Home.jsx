import { apiMoviesTranding } from 'services/api-movies';
import { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Main } from 'components/Main/Main.styled';
import { ToastError } from 'components/ToastError/ToastError.styled';
import { MoviesList } from 'components/MovieList/MovieList';

const Home = () => {
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');
  const location = useLocation();
  useEffect(() => {
    apiMoviesTranding()
      .then(({ data }) => setResults(data.results))
      .catch(error => setMessage(error.message));
  }, []);
  return (
    <>
      {message.length > 0 ? (
        <ToastError>{message}</ToastError>
      ) : (
        <Main>
          <h1>Tranding today</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <MoviesList state={{ from: location }} results={results} />
          </Suspense>
        </Main>
      )}
    </>
  );
};

export default Home;
