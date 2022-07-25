import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiMoviesReviews } from 'services/api-movies';
import { SecondTitle } from 'components/Title/Title.styled';
import { Text } from 'components/Text/Text.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    apiMoviesReviews(movieId).then(({ data }) => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <SecondTitle>{review.author}</SecondTitle>
            <Text>{review.content}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};
