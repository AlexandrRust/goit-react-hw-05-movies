import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { apiMoviesById } from 'services/api-movies';
import { BackLink } from 'components/Links/BackLink.styled';
import { Box } from 'components/Box/Box.styled';
import { Title, SecondTitle } from 'components/Title/Title.styled';
import { Text } from 'components/Text/Text.styled';
import { ListWraper } from 'components/MovieDetails/ListWraper.styled';
import { StyleLink } from 'components/Links/Link.styled';
import { BoxInfo } from 'components/MovieDetails/BoxInfo.syled';
import { ImArrowLeft2 } from 'react-icons/im';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '';

  useEffect(() => {
    apiMoviesById(movieId).then(({ data }) => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return null;
  }
  return (
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
          <ListWraper>
            {movie.genres.map(({ id, name }) => (
              <li key={id}>
                <Text>{name}</Text>
              </li>
            ))}
          </ListWraper>
        </div>
      </Box>

      <BoxInfo>
        <SecondTitle>Additional information</SecondTitle>
        <ListWraper>
          <StyleLink to="cast" state={{ from: backLinkHref }}>
            <Text>Cast</Text>
          </StyleLink>
          <StyleLink to="reviews" state={{ from: backLinkHref }}>
            <Text>Reviews</Text>
          </StyleLink>
        </ListWraper>
      </BoxInfo>
      <Outlet />
    </>
  );
};

export default MovieDetails;
