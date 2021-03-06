import styled from "styled-components";


export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg}) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
  align-items: center; 
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  flex-basis: 50%;
  max-width: 50%;

  @media screen and (max-width: 768px) {
      max-width: 100%;
      flex-basis: 100%;
      display: flex;
      justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
      padding-bottom:65px;
  }
`

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')}
  font-size: 48px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48;
  line-height: 1.1;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')}
`

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 48px;
  margin-bottom: 35px
  line-height: 24px;
  color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2337')}
`

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
  max-width: 555px;
`

export const Img = styled.img`
  border: 0;
  max-width: 70%;
  vertical-align: middle;
  display: inline-block;
`
