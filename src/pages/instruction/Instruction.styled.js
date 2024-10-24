import styled from 'styled-components';
import { Flex } from '../../components/templates/Flex';

export const InstructionContainer = styled(Flex)`
  height: 100svh;
  flex-direction: column;
  color: #707070;
`
export const Heading = styled.h1`
  font-size: clamp(2rem, 2rem + 0.5vw, 3rem);
  margin-bottom: 0.75em;
`

export const List = styled.ol`
    text-align: center;
    padding: 0 0.5em;
    font-size: clamp(1.25rem, 1.25rem + 0.5vw, 3rem);

    li {
    padding: 0.5em;
    }
`

export const ButtonContainer = styled.div`
  margin-top: 3em;
`
