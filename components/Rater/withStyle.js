import styled from 'styled-components';

export default (component) => styled(component)`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  .star {
    width: 10px;
    height: 10px;
    margin-left: 1px;
    cursor: pointer;
    border: none;
    outline: none;
    background: url("/img/filled-star.svg");
  }
  
  .filled {
    background: url("/img/filled-star.svg");
  }
  
  .outlined {
    background: url("/img/star.svg");
  }

`;
