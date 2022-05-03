import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', San-serif;
}
`

export const Container = styled.div`
 z-index: 1;
 width: 100%;
 max-width: 1300px;
 margin: 0 auto;
 padding: 0 50px;

 @media screen and (max-width: 991px) {
 padding: 0 30px;  
 }
`;

export const Button = styled.button`
  border-radius: 4px;
  width: 100%;
  background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '.87rem 5.07rem' : '.7rem 1.3rem')};
  color: #fff;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  border: none;
  cursor: pointer;

  &:hover {
      transition: all .3s ease-out;
      background: #fff;
      background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
` 

export default GlobalStyle;