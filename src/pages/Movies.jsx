import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { apiMoviesSearch } from 'services/api-movies';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MovieList/MovieList';
import { ToastError } from 'components/ToastError/ToastError.styled';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  const getQuery = ({ query }) => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    } else {
      apiMoviesSearch(searchQuery)
        .then(({ data }) => setResults(data.results))
        .catch(error => setMessage(error.message));
    }
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={getQuery} value={searchQuery} />
      {message.length > 0 ? (
        <ToastError>{message}</ToastError>
      ) : (
        <MoviesList results={results} state={{ from: location }} />
      )}
    </>
  );
};

export default Movies;
