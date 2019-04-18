import styled from 'styled-components';

export default (component) => styled(component)`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    
    &:hover {
      .previous,
      .next
       {
        display: inline-block;
      }
    }

    
    .slide-image {
      display: inline-block;
      float: left;
      width: 100%;
      height: 100%;
      animation: fadeIn 1s ease-in;
    }
    
    
    ul > li {
      display: inline-block;
      float: left;
    }
    
    .previous,
    .next {
        position: absolute;
        height: 100%;
        display: none;
        width: 50px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    
    
    .previous {
        left: 0;
        background: url("/img/previous.svg") center center / 20px 20px no-repeat, linear-gradient(to right,rgba(0,0,0,.5), rgba(0,0,0,0));
    }
    
    .next {
        right: 0;
        background: url("/img/next.svg") center center / 20px 20px no-repeat , linear-gradient(to left,rgba(0,0,0,.5), rgba(0,0,0,0));
    }
    
    @keyframes fadeIn {
      from {
            opacity: 0;
            clip-path: ellipse(0 0 at 10% 20%);
            }
      to {
          opacity: 1;
          clip-path: ellipse(100% 100% at 10% 20%);
      }
    }
`;
