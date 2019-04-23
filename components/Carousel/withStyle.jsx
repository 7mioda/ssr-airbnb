import styled from 'styled-components';

export default (component) => styled(component)`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  overflow: hidden;

  .slide * {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    object-fit: cover;
  }

  .slide {
    display: inline;
  }

  .slide__track {
    width: ${({ width, children }) => children.length * width}px;
    list-style: none;
    padding: 0;
    margin: 0;
    transition: transform ease-in 0.7s;
  }

  .slide__button {
    border: none;
    outline: none;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    background: transparent;
    cursor: pointer;
    z-index: 10;
  }

  .slide__button--next {
    right: 0;
  }

  .slide__button--previous {
    left: -8px;
  }
`;
