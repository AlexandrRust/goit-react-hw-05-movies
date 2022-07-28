import { StyleMoviesList } from 'components/MovieList/MoviesList.styled';
import { ListLink } from 'components/Links/ListLink.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ results }) => {
  const location = useLocation();

  return (
    <StyleMoviesList>
      {results.map(({ id, title, name }) => (
        <li key={id}>
          <ListLink to={`/movies/${id}`} state={{ from: location }} key={id}>
            {title === undefined ? name : title}
          </ListLink>
        </li>
      ))}
    </StyleMoviesList>
  );
};
