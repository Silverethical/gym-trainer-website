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
      text: "درباره من",
      link: "#about-me",
      iconUrl: "/images/header/User.svg",
    },
    {
      text: "خدمات",
      link: "#services",
      iconUrl: "/images/header/Barbell.svg",
    },
    {
      text: "ارتباط با من",
      link: "#contact-me",
      iconUrl: "/images/header/phone.svg",
    },
    {
      text: "نظرات کاربران",
      link: "#",
      iconUrl: "/images/header/ChatDots.svg",
    },
    {
      text: "سوالات متداول",
      link: "#faq-wrapper",
      iconUrl: "/images/header/QuestionMark.svg",
    },
  ];

  const [showMenu, setShowMenuStatus] = useState(false);

  return (
    <header>
      <div className="container">
        <div id="logo">
          <img src="/images/general/favicon.svg" alt="" />
        </div>
        <div id="desktop-links">
          {desktopHeaderLinks.map((link, idx) => (
            <a key={idx} href={link.link}>
              {link.text}
            </a>
          ))}
        </div>
        <div id="hamruger-menu" onClick={() => setShowMenuStatus(!showMenu)}>
          <img src="/images/header/hamburger-menu.svg" />
        </div>
        <div id="mobile-menu" className={showMenu ? "show" : ""}>
          <div id="closeIcon" onClick={() => setShowMenuStatus(!showMenu)}>
            <img src="/images/header/closeIcon.svg" />
          </div>

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
    </header>
  );
};

export default Header;
