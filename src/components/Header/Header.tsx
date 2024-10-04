import { useState } from "react";
import "./header.scss";

const Header = () => {
  type headerLinkType = { text: string; link: string; iconUrl?: string };

  const desktopHeaderLinks: headerLinkType[] = [
    { text: "خدمات", link: "#services" },
    { text: "تماس با من", link: "#contact-me" },
    { text: "درباره من", link: "#about-me" },
  ];

  const mobileHeaderLinks: headerLinkType[] = [
    {
      text: "خدمات",
      link: "#services",
      iconUrl: "/images/header/Barbell.svg",
    },
    {
      text: "راه های ارتباطی",
      link: "#contact-me",
      iconUrl: "/images/header/phone.svg",
    },
    {
      text: "درباره من",
      link: "#about-me",
      iconUrl: "/images/header/User.svg",
    },
    {
      text: "سوالات متداول",
      link: "#FAQ",
      iconUrl: "/images/header/QuestionMark.svg",
    },
    // {
    //   text: "نظرات شاگردان",
    //   link: "#student-review",
    //   iconUrl: "/images/header/ChatDots.svg",
    // },
  ];

  const [showMenu, setShowMenuStatus] = useState(false);

  return (
    <header>
      <div className="container">
        <a id="logo" href="/">
          <img src="/images/general/favicon.svg" />
        </a>
        <div id="desktop-links">
          {desktopHeaderLinks.map((link, idx) => (
            <a key={idx} href={link.link}>
              {link.text}
            </a>
          ))}
        </div>
        <div id="hamruger-menu" onClick={() => setShowMenuStatus(!showMenu)}>
          <div className={`icon nav-icon-5 ${showMenu && "open"}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          id="mobile-menu-wrapper"
          className={showMenu ? "show" : ""}
          onClick={(e) => {
            // hide mobile menu on wrapper click
            const clickedElement = e.target as HTMLElement;
            if (clickedElement.id === "mobile-menu-wrapper") {
              setShowMenuStatus(false);
            }
          }}
        >
          <div id="mobile-menu">
            <div id="mobile-links">
              {mobileHeaderLinks.map((link, idx) => (
                <div className="link-wrapper" key={idx}>
                  <img src={link.iconUrl} />
                  <a
                    onClick={() => setShowMenuStatus(!showMenu)}
                    key={idx}
                    href={link.link}
                  >
                    {link.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
