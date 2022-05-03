import styled from "styled-components";
// import { Link } from "react-router-dom";

export const CardHeader = styled.div`
  
  height: auto;
  padding: 50px;
  margin-bottom: 3rem;
`

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grig-template-rows: 1fr 1fr 1fr;
  gap: 1.3rem;
`

export const CardBox = styled.div`
  padding: 1.5rem;
  background: ${({blueBg}) => (blueBg ? '#fff' : '#101522')};
  box-shadow: 2px 3px 10px #222;
  border-radius: 10px;
  height: 300px;
`

export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  background: ${({ whiteBg}) => (whiteBg ? '#fff' : '#222')}
  width: 40%;

  @media screen and (max-width: 768px) {
    display: block ;
  }
`

export const Img = styled.img`
  max-width: 100%;
  border: 0;
  border-radius: 50%;
  object-fit: cover;
  vertical-align: middle;  
  color: #222;

  
`

export const CardName = styled.span`
 color: ${({blackText}) => (blackText ? 'white' : 'red')};


`

export const CardList = styled.div`
  color: ${({colorList})=> (colorList ? '#222' : "#fff")};
`

export const CardPriceValue = styled.div`
  color: #222;
`

// export const CardLink = styled(Link)`
  
// `