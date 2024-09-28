import "./footer.scss";
import { socials } from "../../data/socials";

const Footer = () => {
  type footerLinkType = { text: string; link: string };

  const footerLinks: footerLinkType[] = [
    { text: "خدمات", link: "#services" },
    { text: "راه های ارتباطی", link: "#contact-me" },
    { text: "درباره من", link: "#about-me" },
    { text: "سوالات متداول", link: "#FAQ" },
    // { text: "نظرات شاگردان", link: "#student-review" },
  ];

  return (
    <footer id="footer">
      <div className="container">
        <div id="footer-wrapper">
          <div id="links">
            {footerLinks.map((link, idx) => (
              <a key={idx} href={link.link}>
                {link.text}
              </a>
            ))}
          </div>
          <div id="social-icons">
            {socials.map((item, idx) => (
              <a key={idx} className="social" href={item.link}>
                <img src={item.iconUrl} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
