import React, { useEffect, useRef, useState } from "react";
import ReactStars from "react-rating-stars-component";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import SectionTitle from "./Shared/SectionTitle";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`reviews.json`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <div className="pb-14">
        <SectionTitle
          subHeading={"What Our Clients Says"}
          heading={"testimonial"}
        />
        <Swiper className="mySwiper">
          {reviews.map((r) => (
            <SwiperSlide>
              <div className="mx-14 space-y-3 text-center">
                <ReactStars
                  classNames={"mx-auto disabled"}
                  value={r.rating}
                  count={5}
                  size={30}
                  activeColor="#ffd700"
                />

                <FaQuoteLeft size={50} className="mx-auto" />
                <h1 className="px-20 text-gray-600 tracking-wide">
                  {r.details}
                </h1>
                <p className="text-2xl  text-yellow-600">{r.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
