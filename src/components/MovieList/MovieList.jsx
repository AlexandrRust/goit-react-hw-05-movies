import { StyleMoviesList } from 'components/MovieList/MoviesList.styled';
import { ListLink } from 'components/Links/ListLink.styled';
import { useLocation } from 'react-router-dom';
import { ToastError } from 'components/ToastError/ToastError.styled';

export const MoviesList = ({ results }) => {
  const location = useLocation();

  return (
    <>
      {results.length === 0 ? (
        <ToastError>Enter movie name</ToastError>
      ) : (
        <StyleMoviesList>
          {results.map(({ id, title, name }) => (
            <li key={id}>
              <ListLink
                to={`/movies/${id}`}
                state={{ from: location }}
                key={id}
              >
                {title === undefined ? name : title}
              </ListLink>
            </li>
          ))}
        </StyleMoviesList>
      )}
    </>
  );
};
