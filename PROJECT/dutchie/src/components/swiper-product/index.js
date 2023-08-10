import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import ItemCard from "../ProductListingComp/ItemCard";

export default function SwiperProduct({ cards }) {
  return (
    <div className="home_slider">
      <Swiper
        modules={[Navigation, EffectFade]}
        spaceBetween={33}
        slidesPerView={4}
        navigation
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}> 
              <ItemCard
                className='swipper-item-card'
                itemName={card.name}
                discount={card.hasOwnProperty('discount') ? card.discount : -1}
                oldPrice={card.price}
                newPrice={card.price}
                moneySymbol='$'
              />

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
