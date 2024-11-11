import styled from 'styled-components';
import { Flex } from '../../components/templates/Flex';

export const ThemesContainer = styled(Flex)`
  flex-direction: column;
  flex-wrap: wrap;

  .swiper {
    width: clamp(275px, 275px + 10vw, 350px);
}

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;

    img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
  }

  .swiper-pagination {
    bottom: -45px;

    &-bullet {
      width: 1em;
      height: 1em;

      &-active {
        background-color: #33CC99;
      }
    }
  }
`

export const Heading = styled.h1`
  font-size: clamp(2rem, 2rem + 0.5vw, 3rem);
  color: #707070;
  margin: 1.25em 0 .5em;
  text-align: center;
`

export const ButtonContainer = styled.div`
  position: relative;
  bottom: -80px;
`
