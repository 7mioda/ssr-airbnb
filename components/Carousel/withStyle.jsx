import styled from 'styled-components';

export default (component) => styled(component)`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  overflow: hidden;
  * {
    margin: 0;
    padding: 0;
  }
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
    left: 0px;
  }

  .indicator-container {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
  }
  .indicator {
    border: none;
    outline: none;
    margin-left: 5px;
    border-radius: 50%;
    height: 8px;
    width: 5px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
  }

  .indicator.active {
    border-radius: 20%;
    height: 5px;
    width: 8px;
  }
`;
