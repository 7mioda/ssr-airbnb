import styled from 'styled-components';

export default (component) => styled(component)`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.67);
  .modal {
    position: absolute;
    width: 45%;
    min-width: 300px;
    max-width: 586px;
    padding: 60px 25px 25px 25px;
    left: 50%;
    top: 50vh;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 10;
  }
  .modal__close-icon {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 50%;
  }
`;
