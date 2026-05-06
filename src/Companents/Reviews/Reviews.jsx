import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Reviews.scss";

const reviews = [
  {
    name: "Jessica Brown",
    text: "The burgers here are absolutely amazing! Super juicy and full of flavor. Will definitely come again!",
    website: "burgerhaven.com",
    rating: 5,
    image: "https://img.freepik.com/vecteurs-libre/femme-souriante-aux-cheveux-tresses_1308-178504.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Carlos Mendez",
    text: "Tried their chicken tenders and fries — delicious and super crispy. Great service too!",
    website: "crispybite.com",
    rating: 5,
    image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_items_boosted&w=740",
  },
  {
    name: "Alina Park",
    text: "Hands down the best milkshakes in town. Rich, creamy, and just the right amount of sweetness.",
    website: "shakeland.com",
    rating: 4.5,
    image: "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
  },
];

const Reviews = () => {
  return (
    <div>
        <h1 className="reviews">Our Reviews</h1>
      <div className="reviews-section">
        {/* <h1>Our Reviews</h1> */}
        <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}>
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <div className="review-header">
                  <img className="avatar" src={review.image} alt={review.name} />
                  <div>
                    <h4>{review.name}</h4>
                    <div className="stars">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-footer">
                  <span><h4>TBF</h4></span>
                  <a href={`https://${review.website}`} target="_blank" rel="noopener noreferrer">
                    {review.website}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;