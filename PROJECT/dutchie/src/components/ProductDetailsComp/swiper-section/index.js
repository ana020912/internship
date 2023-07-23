// import React, { useRef, useState } from "react";

// // Import Swiper React components

// import { Swiper, SwiperSlide } from "swiper/react";




// // Import Swiper styles

// import "swiper/css";

// import "swiper/css/free-mode";

// import "swiper/css/navigation";

// import "swiper/css/thumbs";




// // import required modules

// import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// import Styles from "./SiperSection.module.css";




// export default function SwiperSection() {

//   const [thumbsSwiper, setThumbsSwiper] = useState(null);




//   return (

//     <>

//       <Swiper

//         style={{

//           "--swiper-navigation-color": "#fff",

//           "--swiper-pagination-color": "#fff",

//         }}

//         spaceBetween={10}

//         navigation={false}

//         thumbs={{ swiper: thumbsSwiper }}

//         modules={[FreeMode, Navigation, Thumbs]}

//         className={Styles.mySwiper2}

//       >

//         <SwiperSlide>

//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />

//         </SwiperSlide>

//         <SwiperSlide>

//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />

//         </SwiperSlide>

//         <SwiperSlide>

//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />

//         </SwiperSlide>

//         <SwiperSlide>

//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />

//         </SwiperSlide>

//       </Swiper>

//       <Swiper

//         onSwiper={setThumbsSwiper}

//         spaceBetween={10}

//         slidesPerView={4}

//         freeMode={true}

//         watchSlidesProgress={true}

//         modules={[FreeMode, Navigation, Thumbs]}

//         className={Styles.mySwiper}

//       >

//         <SwiperSlide>

//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />

//         </SwiperSlide>

//         <SwiperSlide>

//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />

//         </SwiperSlide>

//         <SwiperSlide>

//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />

//         </SwiperSlide>

//         <SwiperSlide>

//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />

//         </SwiperSlide>

//       </Swiper>

//     </>

//   );

// }