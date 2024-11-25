import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100svh;
  flex-grow: 0.5;
  color: #707070;

  @media only screen and (min-width: 768px) {
    padding-left: 1em;
    overflow-y: auto;
  }
`

export const Heading = styled.h1`
  font-size: clamp(1rem, 1rem + 0.5vw, 3rem);
  font-weight: 400;
`
export const Subheading = styled.h3`
    font-size: clamp(0.9rem, 1rem + 0.5vw, 2rem);
    font-weight: 400;
    margin: 1em 0 0.5em;
`
export const FieldContainer = styled.div`
  margin-top: 1em;

  & * {
    width: 100%;
    color: #707070;
    display: block;
  }
`
export const Input = styled.input`
  max-width: 500px;
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
  outline: 1px solid #707070;
  &:focus {
    outline: 1px solid #33cc99;
  }
`
export const TextArea = styled.textarea`
    max-width: 500px;
    width: 100%;
    margin: 0.5em 0;
    padding: 0.5em;
    color: #707070;
    display: block;
    outline: 1px solid #707070;
    border: none;
    &:focus {
      outline: 1px solid #33cc99;
  }
`

export const AddButton = styled.button`
  color: #707070;

  span {
    display: inline-flex;
    border: 2px solid #707070;
    border-radius: 50%;
    font-weight: 600;
    width: 25px;
    height: 25px;
    align-items: center;
    justify-content: center;
    margin-right: 1em;
  }
`
