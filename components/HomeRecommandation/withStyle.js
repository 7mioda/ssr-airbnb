import styled from 'styled-components';

export default (component) => styled(component)`
  margin: 20px auto;
  color: rgb(72, 72, 72);
  h2 {
    margin-bottom: 20px;
  }
  .recommandation__item {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 300px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px 0;
    cursor: pointer;
  }
  .item__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item__title {
    display: inline;
    position: absolute;
    top: 90%;
    left: 30%;
    color: #fff;
    font-weight: 600;
  }
`;