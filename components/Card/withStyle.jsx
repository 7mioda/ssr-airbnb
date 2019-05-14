import styled from 'styled-components';

export default (component) => styled(component)`
  width: calc((100% / 4) + 80px);
  color: rgb(118, 118, 118);
  margin-left: 20px;
  font-size: 10px;
  padding-bottom: 30px;
  height: 360px;
  display: inline-block;
  cursor: pointer;

  .card__slider {
    width: 100%;
    height: 70%;
  }

  .card__body {
    padding-top: 5px;
    width: 100%;
    min-height: 81px;
  }

  .card__body h3 {
    padding: 2px 0;
    text-transform: uppercase;
    font-weight: 500;
  }
  .card__body h2 {
    padding: 2px 0;
    color: rgb(73, 73, 73);
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 270px;
  }

  .currency {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 2px;
  }

  .euro {
    background: url('/img/euro.svg') center center / 10px 10px no-repeat;
  }

  p {
    padding: 2px 0;
    font-weight: 300;
    font-size: 12px;
  }
`;
