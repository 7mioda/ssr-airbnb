import styled from 'styled-components';

export default (component) => styled(component)`
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  cursor: pointer;
  &:last-child .menu-item__dropdown {
    left: auto;
    right: 0;
  }
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    display: inline-block;
    height: 2px;
    width: 0;
    background: #474747;
    transition: width ease-in-out 0.7s;
  }
  &:hover:after {
    width: 100%;
  }

  .menu-item__title {
    height: 100%;
    width: 100%;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .menu-item__dropdown {
    position: absolute;
    left: 0;
    top: 104%;
    background: #fff;
    width: 200%;
    padding: 0 20px;
    text-align: left;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 5px;
    border-color: rgb(235, 235, 235) rgb(235, 235, 235);
    border-style: none solid solid !important;
    border-width: medium 1px 1px !important;
  }
`;
