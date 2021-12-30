import styled from 'styled-components';

const Button = styled.button`
  border: 1.3px solid currentColor;
  color: inherit;
  padding: 10px 20px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  font-weight: bold;
  background-color: unset;
  border-radius: 7px;
  text-transform: uppercase;
  & * {
    text-decoration: none;
  }
  &:hover {
    background-color: var(--tilt-opaque);
    color: var(--tilt);
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

export default Button;
