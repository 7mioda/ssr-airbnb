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
    width: calc(
      100% / ${({ children, itemNumber = 1 }) => children.length * itemNumber}
    );
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
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    height: 31px;
    width: 31px;
    color: #ffffff;
    background: transparent;
    cursor: pointer;
    z-index: 10;
    transition: all ease-in-out 0.3s;
  }

  .slide__button--next {
    right: 2px;
  }

  .slide__button--previous {
    left: 2px;
  }

  .slide__button:hover,
  .slide__button:focus,
  .slide__button:active {
    color: rgba(0, 0, 0, 0.3);
    background: #fff;
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
    transform: translateY(0);
    transition: all ease-in-out 0.5s;
  }

  .indicator.active {
    border-radius: 20%;
    height: 5px;
    width: 8px;
    padding-bottom: 1px;
    transform: translateY(-2px);
  }

  .slides {
    width: 100%;
    height: 100%;
  }

  .slides > * {
    float: left;
    width: calc(100% / 6);
    height: 100%;
    object-fit: cover;
    margin: 0 10px;
    animation: mymove 3s;
  }
  @keyframes mymove {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;
