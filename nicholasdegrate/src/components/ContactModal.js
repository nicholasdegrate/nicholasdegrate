import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HomeForm } from "./Form";

import { revealContact, revealCloseContact } from "./Animations";

console.log(String(window.innerWidth));
const HomeContact = ({ contact, setContact }) => {
  let contactLayer = useRef(null),
    revealContactSide = useRef(null);

  // revealContactSecondarySide = useRef(null);
  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (contact.clickedContact === false) {
      // If menu is closed and we want to open it.

      revealCloseContact(revealContactSide);
      // Set menu to display none
      gsap.to(contactLayer, { duration: 1, css: { display: "none" } });
    } else if (
      contact.clickedContact === true ||
      (contact.clickedContact === true && contact.initial === null)
    ) {
      // Set menu to display block
      gsap.to(contactLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      if (window.innerWidth <= "700") {
        gsap.to(revealContactSide, {
          duration: 0,
          opacity: 1,
          width: "100%",
        });
        revealContact(revealContactSide);
      } else {
        gsap.to(revealContactSide, {
          duration: 0,
          opacity: 1,
          width: "50%",
        });
        revealContact(revealContactSide);
      }
      // revealContact(revealContactSide);
    }
  }, [contact]);

  const handleClose = () => {
    if (contact.clickedContact === true) {
      revealCloseContact(revealContactSide);
      setContact({
        clickedContact: !contact.clickedContact,
      });
    }
  };

  return (
    <div ref={(el) => (contactLayer = el)} id="nav-contact-wrapper">
      <div ref={(el) => (revealContactSide = el)} className="contact-bg">
        <div className="contact-wrapper">
          <div className="close-contact-btn">
            <button onClick={handleClose}>
              <p>Close</p>
            </button>
          </div>
          <div id="contact-container">
            <HomeForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
