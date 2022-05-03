import React, {useState} from 'react';
import { useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalstyle';
import { 
   Nav,
   NavbarContainer,
   NavLogo,
   NavIcon,
   MobileIcon,
   NavMenu,
   NavItem,
   NavLinks,
   NavItemBtn,
   NavBtnLink
  } 
  from './Navbar.element'; 

const Navbar = () => {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton)
  return (
      <>
        <IconContext.Provider value={{ color: '#fff'}}>
          <Nav>
            <NavbarContainer>
              <NavLogo to="/">
                <NavIcon />
                Home
              </NavLogo>
              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                  <NavItem>
                    <NavLinks to='/'>Home</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='/services'>Services</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='/product'>Products</NavLinks>
                  </NavItem>

                  <NavItemBtn>
                    {
                      button ? (
                        <NavBtnLink as="a" to="/sign-up">
                          <Button primary>SIGN UP</Button>
                        </NavBtnLink>
                      )  : (
                        <NavBtnLink as="a" to="/sign-up">
                          <Button fontBig priamry>
                            Sign Up
                          </Button>
                        </NavBtnLink>
                      )
                    }
                  </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
        
      </>
  );
};

export default Navbar;
