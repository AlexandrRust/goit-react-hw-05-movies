import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiMoviesCast } from 'services/api-movies';
import { Text } from 'components/Text/Text.styled';
import { SecondTitle } from 'components/Title/Title.styled';
import { ToastContainer } from 'react-toastify';

const CastList = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    apiMoviesCast(movieId).then(({ data }) => setCasts(data.cast));
  }, [movieId]);

  return (
    <div>
      <ul>
        {casts.map(
          cast =>
            cast.profile_path !== null &&
            cast.profile_path !== undefined && (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                  alt=""
                />
                <SecondTitle>{cast.original_name}</SecondTitle>
                <Text>Character: {cast.character}</Text>
              </li>
            )
        )}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default CastList;
