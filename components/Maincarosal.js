import React from 'react';
// import Swiper core and required modules
import { EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
const carosal = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <section className='p-3 lg:p-36'>
        <Swiper
          // install Swiper modules
          modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
          effect='fade'
          fadeEffect={{
            crossFade: true
          }}
          loop={true}
          autoplay={true}
          spaceBetween={10}
          slidesPerView={2}
          scrollbar={{
            draggable: true,
            dragSize: 'auto',
            hide: true
          }}
          navigation
        >
          <SwiperSlide>
            <img src="https://www.awtawooltesting.com.au/images/slides/7_9caa2793658f3cc387f216157300b1ce_m.jpg"
              className="block w-full shadow-2xl rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/ltkadmfy5/image/upload/v1618263030/1185/theme/theme_top_image_400/jyvjfw4c4oh5ahx5hmdu.jpg"
              className="block w-full shadow-2xl rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://easywashathens.gr/en/wp-content/uploads/2019/03/plysimo-mallinwn-rouxwn.jpg"
              className="block w-full shadow-2xl rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn11.bigcommerce.com/s-hnejd04/product_images/uploaded_images/blog-wonderful-wool.jpg"
              className="block w-full shadow-2xl rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://onceupontoday2.files.wordpress.com/2017/04/img_1497.jpg?w=1000"
              className="block w-full shadow-2xl rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYsLHe9TtMxfHaNnwrVoqwUsF8GjUcncADg&usqp=CAU"
              className="block w-full shadow-2xl rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://handicraftfeltshop.com/wp-content/uploads/2019/03/felt-slider4.jpg"
              className="block w-full shadow-2xl rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.u-buy.jp/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFWUkpKQjgtY0wuX0FDX1VMMTAwMF8uanBn.jpg"
              className="block w-full shadow-2xl rounded-2xl" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}
export default carosal
/*
    pagination={{ clickable: true,
        type: 'bullets',
        dynamicMainBullets:2
      }}

      // install Swiper modules
      modules={[ EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
      effect='coverflow'
      coverflowEffect={{
        rotate: 15,
        slideShadows: false,
      }}      

      spaceBetween={10}
      slidesPerView={2}


      modules={[EffectCards, Navigation, Pagination, Scrollbar, A11y]}
      effect="cards"
      EffectCards={{slideShadows: true}}
*/