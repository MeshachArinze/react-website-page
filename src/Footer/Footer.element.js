import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans' Arial,  san-srif;
  margin-bottom: 24px;
  font-size: 24px;
`

export const FooterSubText = styled.p`
  font-size: 20px;
  margin-bottom: 24px;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
      flex-direction: column;
      width: 80%;
  }
`

export const FormInput = styled.input`
  outline: none;
  border: none;
  padding: .8rem 1.4rem;
  border-radius: 5px;
  font-size: 1.3rem;
  margin-right: 10px;
  margin-bottom: 1.5rem;

  &::placeholder {
      color: #242424;
  }
`

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
      flex-direction: column;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
      flex-direction: column;
  }
`

export const FooterLinksItem = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
      margin: 0;
      padding: 10px;
      width: 100%;
  }
`

export const FooterLinksTitle = styled.h2`
  margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
      color: #0467fb
      transition: .3s ease-out;
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
      flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`