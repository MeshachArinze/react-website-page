import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalstyle';

import { 
    InfoSec,
    InfoRow,
    InfoColumn, 
    TextWrapper, 
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.element';

const InfoSection = ({ 
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description, 
    headline, 
    lightText, 
    topLine,
    img,
    alt,
    start 
}) => {
  return (
    <>
        <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headline}
                            </Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>
                                {description}
                            </Subtitle>
                            <Link to="/sign-up">
                                <Button big fontBig primary>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <ImgWrapper start={start}>
                        <Img src={img} alt={alt} />
                    </ImgWrapper>
                     
                </InfoRow>
            </Container>
        </InfoSec>
    </>
  )
}

export default InfoSection;