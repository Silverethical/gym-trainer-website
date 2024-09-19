import "./footer.scss";
import { socials } from "../../data/socials";

const Footer = () => {
  type footerLinkType = { text: string; link: string };

  const footerLinks: footerLinkType[] = [
    { text: "سوالات متداول", link: "#FAQ" },
    { text: "نظرات کاربران", link: "#student-review" },
    { text: "ارتباط با من", link: "#contact-me" },
    { text: "خدمات", link: "#services" },
    { text: "درباره من", link: "#about-me" },
  ];

  return (
    <footer id="footer">
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
    </footer>
  );
};

export default Footer;
