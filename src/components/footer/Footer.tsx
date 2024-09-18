import "./footer.scss";

const Footer = () => {
  type footerLinkType = { text: string; link: string };

  const footerLinks: footerLinkType[] = [
    { text: "سوالات متداول", link: "" },
    { text: "نظرات کاربران", link: "" },
    { text: "ارتباط با من", link: "#contact-me" },
    { text: "خدمات", link: "" },
    { text: "درباره من", link: "#about-me" },
  ];

  const socials: { iconUrl: string; link: string }[] = [
    {
      iconUrl: "../../../images/socials/instagram.svg",
      link: "https://www.instagram.com/",
    },

    {
      iconUrl: "../../../images/socials/telegram.svg",
      link: "https://t.me/",
    },
    { iconUrl: "../../../images/socials/phone.svg", link: "tel:" },
  ];
  return (
    <footer id="footer">
      <div id="links">
        {footerLinks.map((link) => (
          <a href={link.link}>{link.text}</a>
        ))}
      </div>
      <div id="social-icons">
        {socials.map((item) => (
          <a className="social" href={item.link}>
            <img src={item.iconUrl} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
