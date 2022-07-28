import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { apiMoviesSearch } from 'services/api-movies';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MovieList/MovieList';
import { ToastContainer } from 'react-toastify';

const Movies = () => {
  const [results, setResults] = useState([]);
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
      apiMoviesSearch(searchQuery).then(({ data }) => setResults(data.results));
    }
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={getQuery} value={searchQuery} />
      <MoviesList results={results} state={{ from: location }} />
      <ToastContainer />
    </>
  );
};

export default Movies;
