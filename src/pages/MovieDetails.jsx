import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { apiMoviesById } from 'services/api-movies';
import { BackLink } from 'components/Links/BackLink.style';
import { Box } from 'components/Box/Box.styled';
import { Title, SecondTitle } from 'components/Title/Title.styled';
import { Text } from 'components/Text/Text.styled';
import { MovieDetailsList } from 'components/MovieDetails/MovieDetailsList.styled';
import { StyleLink } from 'components/Links/Link.style';
import { BoxInfo } from 'components/MovieDetails/MovieDetailsList.styled';
import { ImArrowLeft2 } from 'react-icons/im';
import { ToastError } from 'components/ToastError/ToastError.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState('');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '';

  useEffect(() => {
    apiMoviesById(movieId)
      .then(({ data }) => setMovie(data))
      .catch(error => setMessage(error.message));
  }, [movieId]);

  if (!movie) {
    return null;
  }
  return (
    <>
      {message.length > 0 ? (
        <ToastError>{message}</ToastError>
      ) : (
        <>
          <BackLink to={backLinkHref}>
            <ImArrowLeft2 />
            <p>Back</p>
          </BackLink>
          <Box>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <div>
              <Title>{movie.original_title}</Title>
              <SecondTitle>
                User Score: {Math.trunc((movie.vote_average / 10) * 100)} %
              </SecondTitle>
              <SecondTitle>Overview</SecondTitle>
              <Text>{movie.overview}</Text>

              <SecondTitle>Genres</SecondTitle>
              <MovieDetailsList>
                {movie.genres.map(({ id, name }) => (
                  <li key={id}>
                    <Text>{name}</Text>
                  </li>
                ))}
              </MovieDetailsList>
            </div>
          </Box>
          <BoxInfo>
            <SecondTitle>Additional information</SecondTitle>
            <MovieDetailsList>
              <StyleLink to="cast" state={{ from: backLinkHref }}>
                <Text>Cast</Text>
              </StyleLink>
              <StyleLink to="reviews" state={{ from: backLinkHref }}>
                <Text>Reviews</Text>
              </StyleLink>
            </MovieDetailsList>
          </BoxInfo>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
