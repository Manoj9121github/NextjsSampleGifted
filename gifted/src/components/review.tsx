// components/Review.js
import { useState } from 'react';
import  Review  from '@/components/review'

const Review = ({ reviews, onAddReview }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(reviewText);
    setReviewText('');
  };

  return (
    <div>
      <h3>Reviews</h3>
      <form onSubmit={handleSubmit}>
        <textarea
        className='text-orange-600'
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />
        <button type="submit">Add Review</button>
      </form>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
