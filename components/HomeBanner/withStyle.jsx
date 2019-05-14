import styled from 'styled-components';

export default (component) => styled(component)`
  position: relative;
  height: 100vh;
  min-height: 650px;
  font-family: sans-serif;
  .landing {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.2) 10%,
        rgba(0, 0, 0, 0) 20%
      ),
      url('https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg')
        center center / cover no-repeat;
  }

  .landing h1 {
    color: #fff;
    position: absolute;
    bottom: 2%;
    left: 3%;
    display: none;
  }

  .down-arrow {
    background: url('/img/down-arrow.svg') center center / 18px 18px no-repeat;
  }

  .landing-search {
    box-sizing: border-box;
    position: absolute;
    top: 11%;
    left: 10%;
    padding: 30px;
    border-radius: 4px;
    background: #fff;
    color: #484848;
    width: 441px;
    margin-bottom: 64px;
    box-shadow: rgba(0, 0, 0, 0.12) 0 16px 40px;
  }

  .landing-search h1 {
    margin-bottom: 5px;
  }

  .landing-search p {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: normal;
    font-weight: 300;
    margin: 8px 0;
  }

  .search-input,
  .text-input {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin: 10px 0;
  }

  .half {
    display: inline-block;
    width: calc(50% - 10px);
  }

  .half:nth-child(n) {
    margin-left: 5px;
  }

  .half:nth-child(2n) {
    margin-right: 5px;
  }

  .text-field {
    width: 100%;
    margin: 10px 0;
    padding: 0 11px;
    height: 46px;
    font-weight: 300;
    font-size: 16px;
    color: inherit;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  .text-box {
    position: relative;
    width: 100%;
    height: 48px;
    margin-top: 15px;
  }

  .text-input:focus {
    border-color: #6c6c6c;
  }

  .text-input {
    width: 100%;
    padding: 13px;
    font-size: 14px;
    color: #484863;
    font-weight: 300;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    transition: all 0.3s;
  }

  .text-input::placeholder {
    font-weight: 300;
    font-size: 14px;
    color: #6d6d8d;
    opacity: 1; /* Firefox */
  }

  select.text-input {
    -webkit-appearance: none;
  }

  .search-input label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .landing-search__btn {
    height: 46px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    padding: auto 1.1em;
    margin-left: 26%;
  }

  @media only screen and (max-width: 750px) {
    min-height: 100vh;
    .landing {
      height: 70%;
      & h1 {
        display: inline-block;
      }
    }
    .landing-search {
      position: static;
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      & h1 {
        display: none;
      }
    }
  }
`;
