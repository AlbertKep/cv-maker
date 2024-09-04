import styled from 'styled-components';
import { Flex } from '../templates/Flex';

export const Container = styled(Flex)`
    height: 100svh;

    p {
      font-size: clamp(2.5rem, 1.75rem + 0.5vw, 3rem);
      color: #707070;
    }
`
