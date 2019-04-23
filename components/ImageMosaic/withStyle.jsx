import styled from 'styled-components';

export default (component) => styled(component)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-top: 1px solid rgb(72, 72, 72);
  border-bottom: 1px solid rgb(72, 72, 72);
  backface-visibility: hidden;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  &:hover {
    img {
      -webkit-filter: grayscale(75%); /* For Webkit browsers */
      -webkit-transition: 0.5s ease-in-out; /* For Webkit browsers */
      -moz-filter: grayscale(75%); /* For Firefox */
      -moz-transition: 0.5s ease-in-out; /* For Firefox */
      -o-filter: grayscale(75%);
      -o-transition: 0.5s ease-in-out;
    }
  }

  img {
    backface-visibility: hidden;
    transition: all 0.5s ease-in;
    -webkit-filter: grayscale(0%); /* For Webkit browsers */
    -webkit-transition: 0.5s ease-in-out; /* For Webkit browsers */
    -moz-filter: grayscale(0%); /* For Firefox */
    -moz-transition: 0.5s ease-in-out; /* For FireFox */
    -o-filter: grayscale(0%);
    -o-transition: 0.5s ease-in-out;
  }

  img:hover {
    cursor: pointer;
    transform: scale(1.05);
    -webkit-filter: grayscale(0%); /* For Webkit browsers */
    -webkit-transition: 0.5s ease-in-out; /* For Webkit browsers */
    -moz-filter: grayscale(0%); /* For Firefox */
    -moz-transition: 0.5s ease-in-out; /* For FireFox */
    -o-filter: grayscale(0%);
    -o-transition: 0.5s ease-in-out;
  }
  .left {
    display: inline-block;
    position: relative;
    width: 50%;
    height: 100%;
    float: left;
    overflow: hidden;
  }

  .left > img {
    position: absolute;
    left: 0;
    width: 120%;
    height: 120%;
  }

  .right {
    display: inline-block;
    height: 100%;
    width: 50%;
  }

  .flex-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .mosaic-img {
    position: relative;
    display: inline-block;
    height: 50%;
    width: 50%;
    border: 1px solid rgb(72, 72, 72);
    border-top: 0;
    overflow: hidden;
  }

  .mosaic-img:nth-child(2n) {
    border-left: 0;
  }

  .mosaic-img:nth-child(3),
  .mosaic-img:nth-child(4) {
    border-bottom: 0;
  }

  .mosaic-img img {
    position: absolute;
    left: 0;
    width: 120%;
    height: 120%;
  }
`;
