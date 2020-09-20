import React, { useState, useEffect } from "react";

import { Link as Scroll } from "react-scroll";
import { Link, withRouter } from "react-router-dom";

import github from "../img/logo.svg";
import linkedin from "../img/linkedin.svg";

const Header = ({ history }) => {
  // state of our contact

  const [contact, setContact] = useState({
    initial: false,
    clickedContact: null,
  });
  // state of our contact button
  const [disabledContact, setDisabledContact] = useState(false);

  //Use Effect
  useEffect(() => {
    history.listen(() => {
      setContact({ clickedContact: false });
    });
  }, [history]);

  // toggle contact
  const handleContact = () => {
    disableContact();
    if (contact.initial === false) {
      setContact({
        initial: null,
        clickedContact: true,
      });
    } else if (contact.clickedContact === true) {
      setContact({
        clickedContact: !contact.clickedContact,
      });
    } else if (contact.clickedContact === false) {
      setContact({
        clickedContact: !contact.clickedContact,
      });
    }
  };

  const disableContact = () => {
    setDisabledContact(!disabledContact);
    setTimeout(() => {
      setDisabledContact(false);
    });
  };

  return (
    <div id="nav-header">
      <div className="social-media">
        <h2>
          hi<span>_</span>
        </h2>
        <a href="https://github.com/nicholasdegrate/">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/nicholas-degrate-64193614b">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <button disabled={disabledContact} onClick={handleContact}>
        <Scroll
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Scroll>
      </button>
    </div>
  );
};

export default withRouter(Header);
