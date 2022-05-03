import React from 'react';
import { FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter 
} from 'react-icons/fa';

import { Button } from '../globalstyle';
import { 
    FooterContainer,
    FooterSubscription,
    FooterSubHeading, 
    FooterSubText, 
    Form, 
    FormInput, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinksItem, 
    FooterLinksTitle, 
    FooterLink,
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink,
    SocialIcon
} from './Footer.element';



const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our exclusive membership to receive trends
            </FooterSubHeading>
            <FooterSubText>
                you can unsubscribe at any time
            </FooterSubText>
            <Form>
                <FormInput name="email" type="email" placeholder="Your Email" />
                <Button fontBig>Subscribe</Button>
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinksItem>
                    <FooterLinksTitle>
                        About Us
                    </FooterLinksTitle>
                    <FooterLink to='/sign-up'>
                        How it works
                    </FooterLink>
                    <FooterLink to='/'>
                        Testimonials
                    </FooterLink>
                    <FooterLink to='/'>
                        Careers
                    </FooterLink>
                    <FooterLink to='/'>
                        Investors
                    </FooterLink>
                    <FooterLink to='/'>
                        Terms of Service
                    </FooterLink>
                </FooterLinksItem>
                <FooterLinksItem>
                    <FooterLinksTitle>
                        Contact Us
                    </FooterLinksTitle>
                    <FooterLink to='/sign-up'>
                        How it works
                    </FooterLink>
                    <FooterLink to='/'>
                        Testimonials
                    </FooterLink>
                    <FooterLink to='/'>
                        Careers
                    </FooterLink>
                    <FooterLink to='/'>
                        Investors
                    </FooterLink>
                    <FooterLink to='/'>
                        Terms of Service
                    </FooterLink>
                </FooterLinksItem>
                <FooterLinksItem>
                    <FooterLinksTitle>
                        Videos
                    </FooterLinksTitle>
                    <FooterLink to='/sign-up'>
                        How it works
                    </FooterLink>
                    <FooterLink to='/'>
                        Testimonials
                    </FooterLink>
                    <FooterLink to='/'>
                        Careers
                    </FooterLink>
                    <FooterLink to='/'>
                        Investors
                    </FooterLink>
                    <FooterLink to='/'>
                        Terms of Service
                    </FooterLink>
                </FooterLinksItem>
                <FooterLinksItem>
                    <FooterLinksTitle>
                        Social Media
                    </FooterLinksTitle>
                    <FooterLink to='/sign-up'>
                        How it works
                    </FooterLink>
                    <FooterLink to='/'>
                        Testimonials
                    </FooterLink>
                    <FooterLink to='/'>
                        Careers
                    </FooterLink>
                    <FooterLink to='/'>
                        Investors
                    </FooterLink>
                    <FooterLink to='/'>
                        Terms of Service
                    </FooterLink>
                </FooterLinksItem>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia> 
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    <SocialIcon />
                    Ultra
                </SocialLogo>    
                    <WebsiteRights>
                        ULTRA @ 2022
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>     
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer