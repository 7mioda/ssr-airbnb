import styled from 'styled-components';

export default (component) => styled(component)`
  height: 81px;
  vertical-align: middle;
  color: #474747;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #F4F4F4;
  font-weight: 400;
  .logo {
      display: inline-block;
      height: 34px;
      width: 34px;
      vertical-align: middle;
      margin-right: 20px;
      color: #fff;
      padding-left: 25px;
      background: url("/img/airbnb-pink-logo.svg") center center / cover no-repeat;
    }
    
    .search-box {
      display: inline-block;
      width: 400px;
      height: 48px;
      border: 1px solid #F4F4F4;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    }
    
    .search-box:hover  {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
    }
    
    .search-text {
      padding: 15px;
      font-size: 14px;
      color: #484863;
      font-weight: 700;
      border-style: none;
    }
    
    .search-text::placeholder {
      font-weight: 700;
      font-size: 14px;
      color: #484863;
      opacity: 1; /* Firefox */
    }
    
    .search-box-icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      padding: 5px;
      margin-left: 15px;
      vertical-align: middle;
      background: url("/img/search.svg") center center / 20px 20px no-repeat;
    }
    
    .landing-nav {
      right: 25px;
      font-size: 14px;
    }
    
    .landing-nav .nav-item {
      position: relative;
      padding: 28px 5px;
      margin-right: 25px;
      display: inline-block;
      text-align: center;
      border-bottom: 2px solid transparent;
      transition: all .3s;
      max-height: 80px;
    }
    
    .landing-nav .nav-item:last-child {
      margin-right: 0;
    }
    
    .landing-nav .nav-item:hover {
      cursor: pointer;
      border-bottom: 2px solid #474747;
    }
    .nav-item img {
        width: 28px;
        height: 28px;
        vertical-align: middle;
        margin: 0 auto;
        border-radius: 50%;
        box-shadow: rgb(235, 235, 235) 0px 0px 0px 2px;
     }
     
     .dropdwon-menu {
          position: absolute;
          right: 0;
          top: 104%;
          background: #fff;
          width: 280px;
          padding: 0 20px;
          text-align: left;
          color: rgb(118, 118, 118);
          z-index: 10;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
          border-color: rgb(235, 235, 235) rgb(235, 235, 235);
          border-style: none solid solid !important;
          border-width: medium 1px 1px !important;
     }
     .dropdown-menu-item {
        padding: 15px 0;
        font-size: 14px;
        color: inherit;
        overflow-wrap: break-word;
        border-bottom: .5px solid rgb(215,215,215);
     }
     
     .dropdown-menu-item:hover {
        border-bottom: .5px solid rgb(118, 118, 118);
     }
     
     .dropdwon-menu .section {
        padding-bottom: 25px;
        border-bottom: .5px solid rgb(215,215,215);
        color: inherit;
     }
     
     .section h3 {
        padding-bottom: 25px;
        padding-top: 25px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 14px;
        font-weight: 400;
        color: inherit;
     }
     
     .section h4.icon:after {
        content: '';
        position: absolute;
        right: 15px;
        display: inline-block;
        width: 30px;
        height: 30px;
        background: white;
     }
     
     .section h4.icon.home:after {
        background: url("/img/home.svg") center center / 30px 30px no-repeat;
     }
     
     .section h4.icon.island:after {
        background: url("/img/island.svg") center center / 30px 30px no-repeat;
     }
     .section p {
        padding-bottom: 10px;
        padding-top: 20px;
        font-size: 14px;
        font-weight: 300;
        color: inherit;
     }
`;
