import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import companyLogo from '../../images/awaymoFullWhite.svg';
import avatar from '../../images/avatar.png';

const MenuContainer = styled.div`
  padding: 1.5rem 1rem;
`;

const LogoButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid white;
`;

const LogoContainer = styled.div`
  height: 1.5rem;
  padding-bottom: 1rem;

  img {
    height: 100%;
    width: auto;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  /* Don't like this - refactor */
  right: 1rem;
  top: 1rem;
`;

const UserInfoContainer = styled.section`
  display: flex;
  justify-content: center;
  color: white;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  align-items: center;
`;

const AvatarContainer = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  border: 10px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: auto;
  }
`;

const UserList = styled.ul`
  color: white;
  list-style-type: none;
  padding: 0;
  text-align: center;

  li {
    padding-bottom: 0.25rem;
  }
`;

const Nav = styled.nav`
  background-color: #ee5f63;
`;

const NavItems = styled.ul`
  list-style-type: none;
  padding: 0;
  color: white;

  li {
    border-bottom: 1px solid white;
    padding: 1rem 0;

    :last-child {
      padding-bottom: 3rem;
    }
  }
`;

const ContactDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactDetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  color: white;
`;

function Menu() {
  return (
    <Fragment>
      <MenuContainer>
        <LogoButtonContainer>
          <LogoContainer>
            <img src={companyLogo} alt="logo" />
          </LogoContainer>
          <ButtonContainer>
            <i class="fas fa-bars" style={{ color: `white` }}></i>
          </ButtonContainer>
        </LogoButtonContainer>
        <UserInfoContainer>
          <UserInfo>
            <AvatarContainer>
              <img src={avatar} alt="avatar" />
            </AvatarContainer>
            <UserList>
              <li>Dominik</li>
              <li>Available Balance</li>
              <li>£1,500:00</li>
            </UserList>
          </UserInfo>
        </UserInfoContainer>

        <Nav>
          <NavItems>
            <li>Profile</li>
            <li>My Bookings</li>
            <li>My Payments</li>
            <li>Support</li>
            <li>Contact Us</li>
            <li>Log Out</li>
            <li>About</li>
            <li>FAQ</li>
          </NavItems>
        </Nav>
        <ContactDetailsContainer>
          <ContactDetailsList>
            <li>We're here to help</li>
            <li>+44 (0) 20 8050 3459</li>
            <li>support@awaymo.com</li>
          </ContactDetailsList>
        </ContactDetailsContainer>
      </MenuContainer>
    </Fragment>
  );
}

export default Menu;
