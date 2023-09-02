/* eslint-disable no-unused-vars */
import React from 'react';

const FoodReview = () => {

  const foodReviews = [
    {
      name: 'Salmon dish',
      picture: 'https://gimmedelicious.com/wp-content/uploads/2021/09/Grilled-Salmon-with-avocado-Salsa-sq.jpg',
      comment: 'This salmon dish is amazing! The fish is cooked perfectly and the seasoning is just right.',
      rating: 4.5
    },
    {
      name: 'Chicken Ramen',
      picture: 'https://www.whiskaffair.com/wp-content/uploads/2021/10/Andhra-Chicken-Curry-2-3.jpg',
      comment: 'The chicken curry is flavorful and the sauce is delicious. Highly recommend!',
      rating: 4
    },
    {
      name: 'Stir-fry',
      picture: 'https://www.spendwithpennies.com/wp-content/uploads/2019/04/Beef-Stir-Fry-SpendWithPennies-6.jpg',
      comment: 'The beef stir-fry is a must-try! The vegetables are fresh and the beef is tender.',
      rating: 5
    }
  ];

  return (
    <div><h1 className=' text-4xl text-center font-bold mt-10'>Reviews</h1>
    <div className="food-review-section grid lg:grid-cols-3 gap-5 text-left my-10 p-5">
        
      {foodReviews.map((review, index) => (
        <div key={index} className="food-review">
          <img className=' w-72 h-72 rounded-lg' src={review.picture} alt={review.name} />
          <div className="food-review-details">
            <h3 className=' text-xl font-semibold py-4'>{review.name}</h3>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}/5</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FoodReview;
