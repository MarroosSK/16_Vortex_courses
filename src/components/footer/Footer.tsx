import "./Footer.css";
import nftIcon from "../../assets/cyclone.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    {
      path: "#",
      display: "Categories",
    },
    {
      path: "#",
      display: "Courses",
    },
    {
      path: "#",
      display: "Plans",
    },
  ];
  const quickLinks2 = [
    {
      path: "#",
      display: "Pricing",
    },
    {
      path: "#",
      display: "Q&A",
    },
  ];
  const quickLinks3 = [
    {
      path: "#",
      display: "About",
    },
    {
      path: "#",
      display: "Contact",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <div className="footer__logo-pack">
              <img src={nftIcon} className="logo" />
              <h2>Vortex</h2>
            </div>
            <p className="description">Learn with us</p>
            <p className="small__text description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis reprehenderit ipsam ipsa expedita! Recusandae rem minus
              officiis atque perferendis voluptatum.
            </p>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Services</h3>
            <ul className="quick__links">
              {quickLinks.map((quickLink, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={quickLink.path}>{quickLink.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Support</h3>
            <ul className="quick__links">
              {quickLinks2.map((quickLink, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={quickLink.path}>{quickLink.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Company</h3>
            <ul className="quick__links">
              {quickLinks3.map((quickLink, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={quickLink.path}>{quickLink.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright {year}, developed by marroos. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
