import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
