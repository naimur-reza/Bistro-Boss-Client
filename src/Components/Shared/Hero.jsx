import React, { useRef, useState } from "react";

import img1 from "../../../src/assets/home/01.jpg";
import img2 from "../../../src/assets/home/02.jpg";
import img3 from "../../../src/assets/home/03.png";
import img4 from "../../../src/assets/home/04.jpg";
import img5 from "../../../src/assets/home/05.png";
import img6 from "../../../src/assets/home/06.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";

export default function Hero() {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {images.map((i) => (
          <SwiperSlide>
            <img src={i} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
