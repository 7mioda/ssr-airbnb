import styled from 'styled-components';

export default (component) => styled(component)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  * {
    margin: 0;
    padding: 0;
  }
  .slide * {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .slide {
    display: inline-block;
    width: calc(100% / ${({ children }) => children.length});
    height: 100%;
  }

  .slide__track {
    width: calc(100% * ${({ children }) => children.length});
    height: 100%;
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
    left: 0;
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
