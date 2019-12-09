import React, { Fragment, useState } from 'react';
import companyLogo from '../../images/awaymoFullWhite.svg';
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
              className="button"
              onClick={() => {
                setIsmenuVisible(true);
                setIsBurgerVisible(false);
                setIsCloseVisible(true);
              }}
            >
              <i class="fas fa-bars fa-lg" style={{ color: `white` }} />
            </button>
          )}
          {isCloseVisible && (
            <button
              className="button"
              onClick={() => {
                setIsmenuVisible(false);
                setIsBurgerVisible(true);
                setIsCloseVisible(false);
              }}
            >
              <i class="fas fa-times fa-lg" style={{ color: `white` }} />
            </button>
          )}
        </div>
      </div>
      {ismenuVisible && (
        <div className="menu__container">
          <div className="user-info__container">
            <div className="user-info">
              <i class="fas fa-user-circle fa-3x"></i>
              <ul className="user-list">
                <li className="user-list__item text--large text--bold">
                  Benjamin
                </li>
                <li className="user-list__item">Available Balance</li>
                <li className="user-list__item">£3,800.00</li>
              </ul>
            </div>
          </div>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav-list__item">
                <i class="fas fa-user"></i>Profile
              </li>
              <li className="nav-list__item">
                <i class="fas fa-plane-departure"></i>My Bookings
              </li>
              <li className="nav-list__item">
                <i class="fas fa-credit-card"></i>My Payments
              </li>
              <li className="nav-list__item">
                <i class="fas fa-life-ring"></i>Support
              </li>
              <li className="nav-list__item">
                <i class="fas fa-phone-alt"></i>Contact Us
              </li>
              <li className="nav-list__item">
                <i class="fas fa-sign-out-alt"></i>Log Out
              </li>
              <li className="nav-list__item">
                <i class="fas fa-question-circle"></i>About
              </li>
              <li className="nav-list__item">
                <i class="fas fa-info"></i>FAQ
              </li>
            </ul>
          </nav>
          <section className="contact-details">
            <ul className="contact-details__list">
              <li className="contact-details-list__item text--bold ">
                We're here to help
              </li>
              <li className="contact-details-list__item text--small">
                +44 (0) 20 8050 3459
              </li>
              <li className="contact-details-list__item text--small">
                <a
                  href="mailto:support@awaymo.com?subject=Support Request"
                  className="contact-details-list-item__link"
                >
                  support@awaymo.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      )}
    </Fragment>
  );
}

export default Menu;
