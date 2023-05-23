import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import img1 from "../../src/assets/home/slide1.jpg";
import img2 from "../../src/assets/home/slide2.jpg";
import img3 from "../../src/assets/home/slide3.jpg";
import img4 from "../../src/assets/home/slide4.jpg";
import img5 from "../../src/assets/home/slide5.jpg";

export default function SmallSlider() {
  const images = [
    {
      image: img1,
      text: "SALADS",
    },
    {
      image: img2,
      text: "PIZZA",
    },
    {
      image: img3,
      text: "SOUP",
    },
    {
      image: img4,
      text: " DESSERT",
    },
    {
      image: img5,
      text: " SALADS",
    },
  ];

  return (
    <>
      <div className="py-14">
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
          modules={[Pagination]}
          className="mySwiper">
          {images.map((i) => (
            <SwiperSlide>
              <img src={i.image} alt="" />
              <h1 className="text-3xl text-center -mt-24 text-white font- ">
                {i.text}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
