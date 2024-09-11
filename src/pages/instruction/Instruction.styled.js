import styled from 'styled-components';
import { Flex } from '../../components/templates/Flex';
import { Link } from 'react-router-dom';

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
export const Button = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background-color: #33CC99;
    font-size: clamp(1rem, 1rem + 0.3vw, 2rem);
    padding: 1em 2em;
    color: #fff;
    border: 2px solid #33CC99;
    border-radius: 5px;
`
