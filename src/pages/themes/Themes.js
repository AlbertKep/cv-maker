import { ThemesContainer, Heading, ButtonContainer } from './Themes.styled';
import { Swiper, SwiperSlide } from 'swiper/react';

import  themes  from "../../assets/data/themes"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Button } from '../../components/templates/Button';


const Themes = () => {
  return (
      <ThemesContainer>
        <Heading>Wybierz motyw</Heading>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCards, Pagination]}
          className="mySwiper"
        >
          {themes.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.name} alt=''/>
            </SwiperSlide>
          ))}
        </Swiper>
        <ButtonContainer>
          <Button to="/creator">Dalej</Button>
        </ButtonContainer>
      </ThemesContainer>
  )
}

export default Themes
