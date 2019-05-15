import styled from 'styled-components';

export default (component) => styled(component)`
  width: 100%;
  margin-top: 20px;
  position: relative;

  .left {
    position: relative;
    display: inline-block;
    width: 60%;
  }

  .room-name {
    display: inline-block;
    float: left;
    width: 80%;
  }

  .room-name h2 {
    font-size: 32px;
    font-weight: 800;
    overflow-wrap: break-word;
    color: rgb(72, 72, 72);
  }

  .avatar-box {
    display: inline-block;
    width: 20%;
    text-align: center;
  }

  .avatar-box img {
    width: 64px;
    height: 64px;
    margin: 0 auto;
    border-radius: 50%;
  }

  .user-name {
    margin-top: 5px;
    overflow-wrap: break-word;
    font-weight: 300;
    color: rgb(118, 118, 118);
  }

  .room-details-body {
    padding: 15px 0;
    font-size: 16px;
    font-weight: 300;
    overflow-wrap: break-word;
    color: rgb(72, 72, 72);
  }

  .room-type,
  .host-type {
    margin-top: 10px;
  }

  .host-type {
    padding-bottom: 30px;
    border-bottom: 1px solid #e1e1e1;
  }

  .room-details-body h3 {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 500;
  }

  .room-type h3::before {
    content: '';
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 10px;
    vertical-align: middle;
    background: url('/img/home.svg') center center / 15px 15px no-repeat;
  }

  .host-type h3::before {
    content: '';
    display: inline-block;
    height: 20px;
    width: 20px;
    vertical-align: middle;
    background: url('/img/medal.svg') center center / 20px 20px no-repeat;
  }

  .host-type p {
    margin-left: 25px;
  }

  .room-type span {
    margin-left: 25px;
  }

  .room-description h3 {
    padding: 20px 0;
  }

  .room-equipment h3 {
    padding: 20px 0;
  }

  .room-description p {
    font-size: 16px;
  }

  .room-links {
    padding: 30px 0;
    border-bottom: 1px solid #e1e1e1;
  }

  .room-links .link {
    margin-bottom: 4px;
    color: #008489;
    font-weight: 500;
  }

  .room-links .link:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .right {
    width: 40%;
    height: 100%;
    position: absolute;
    display: inline-block;
    float: right;
  }

  .price-quote {
    position: sticky;
    top: 0;
    width: 90%;
    margin-left: 50px;
    padding: 25px;
    border: 1px solid #e1e1e1;
  }

  .price-quote-header {
    padding-bottom: 15px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 12px;
    font-weight: 500;
    color: rgb(72, 72, 72);
  }

  .btn {
    display: block;
    width: 100%;
    height: 46px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    padding: auto 1.1em;
    border-style: none;
    border-radius: 4px;
    margin-top: 25px;
  }

  .btn:hover {
    cursor: pointer;
  }

  .pink {
    color: #fff;
    background: #ff5a5f;
    transition: background-color 0.1s;
  }

  .btn.pink:active {
    background: #ba4f54;
  }

  .search-input,
  .text-input {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin: 10px 0;
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
    font-weight: 700;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    transition: all 0.3s;
  }

  .text-input::placeholder {
    font-weight: 400;
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
    color: rgb(72, 72, 72);
  }

  .half {
    display: inline-block;
    width: calc(50% - 10px);
    margin-right: 20px;
  }

  .search-input.half:nth-child(2n) {
    margin-right: 0;
  }

  .text-field {
    width: 100%;
    margin: 5px;
    padding: 0 11px;
    height: 46px;
    font-weight: 600;
    font-size: 16px;
    color: inherit;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  .icon-box {
    position: absolute;
    display: inline-block;
    top: 50%;
    right: 10px;
    width: 20px;
    height: 20px;
    padding: 5px;
    margin-left: 15px;
    vertical-align: middle;
  }

  .down-arrow {
    background: url('/img/down-arrow.svg') center center / 18px 18px no-repeat;
  }

  .price-box .price {
    font-size: 24px;
    margin-right: 5px;
  }

  .info-text {
    display: inline-block;
    padding: 10px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 13px;
    color: rgb(72, 72, 72);
  }
`;
