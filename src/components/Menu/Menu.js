import React, { Fragment, useState } from 'react';
import companyLogo from '../../images/awaymoFullWhite.svg';
import avatar from '../../images/avatar.png';
import './Menu.css';

function Menu() {
  const [ismenuVisible, setIsmenuVisible] = useState(false);
  const [isburgerVisible, setIsBurgerVisible] = useState(true);
  const [isCloseVisible, setIsCloseVisible] = useState(false);

  return (
    <Fragment>
      <div className="logo-button__container">
        <div className="logo__container">
          <img className="logo" src={companyLogo} alt="logo" />
        </div>
        <div className="button__container">
          {isburgerVisible && (
            <button
              className="fas fa-bars button button--burger-menu"
              style={{ color: `white` }}
              onClick={() => {
                setIsmenuVisible(true);
                setIsBurgerVisible(false);
                setIsCloseVisible(true);
              }}
            ></button>
          )}
          {isCloseVisible && (
            <button
              className="fas fa-times button button--close-menu"
              style={{ color: `white` }}
              onClick={() => {
                setIsmenuVisible(false);
                setIsBurgerVisible(true);
                setIsCloseVisible(false);
              }}
            ></button>
          )}
        </div>
      </div>
      {ismenuVisible && (
        <div className="menu__container">
          <div className="user-info__container">
            <div className="user-info">
              <div className="avatar__container">
                <img className="avatar" src={avatar} alt="avatar" />
              </div>
              <ul className="user-list">
                <li className="user-list__item">Dominik</li>
                <li className="user-list__item">Available Balance</li>
                <li className="user-list__item">£1,500:00</li>
              </ul>
            </div>
          </div>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav-list__item">Profile</li>
              <li className="nav-list__item">My Bookings</li>
              <li className="nav-list__item">My Payments</li>
              <li className="nav-list__item">Support</li>
              <li className="nav-list__item">Contact Us</li>
              <li className="nav-list__item">Log Out</li>
              <li className="nav-list__item">About</li>
              <li className="nav-list__item">FAQ</li>
            </ul>
          </nav>
          <section className="contact-details">
            <ul className="contact-details__list">
              <li className="contact-details-list__item">We're here to help</li>
              <li className="contact-details-list__item">
                +44 (0) 20 8050 3459
              </li>
              <li className="contact-details-list__item">support@awaymo.com</li>
            </ul>
          </section>
        </div>
        // </Fragment>
      )}
    </Fragment>
  );
}

export default Menu;
