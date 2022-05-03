import React from "react";
import { Container} from '../../globalstyle';

import { 
    CardHeader, 
    CardWrapper, 
    CardBox, 
    CardImage, 
    Img, 
    CardName, 
    CardPriceValue, 
    CardList,
    
} from "./Card.element";

const Card = ({
    darkBg, 
    blackText,
    img, 
    alt, 
    blueBg, 
    CardText, 
    CardValue, 
    CardDetails,
    whiteBg,
    user,
    budget,
    analytics}) => {
  return (
    <>
      <CardHeader darkBg={darkBg}>
          <Container>
            <CardWrapper>
               <CardBox blueBg={blueBg}>
                  <CardImage whiteBg={whiteBg}>
                      <Img src={img} alt={alt}/>
                  </CardImage>
                  <CardName blackText={blackText}>
                      {CardText}
                  </CardName>
                  <CardPriceValue>
                      {CardValue}
                  </CardPriceValue>
                  <CardList>
                    {CardDetails}
                  </CardList>
                  {/* <CardLink to="/">
                    {user}
                  </CardLink>
                  <CardLink to="/">
                    {budget}
                  </CardLink>
                  <CardLink to="/">
                    {analytics}
                  </CardLink>
                  <CardLink to="/"> */}
                    {/* <Button big fontBig primary>
                      {buttonLabel}
                    </Button> */}
                  {/* </CardLink> */}
               </CardBox>
            </CardWrapper>
          </Container>
      </CardHeader>
    </>
  )
}

export default Card;
