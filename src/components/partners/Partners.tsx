import "./Partners.css";
import Marquee from "react-fast-marquee";
import partner1 from "../../assets/brand-1.png";
import partner2 from "../../assets/brand-2.png";
import partner3 from "../../assets/brand-3.png";
import partner4 from "../../assets/brand-4.png";
import partner5 from "../../assets/brand-5.png";
import partner6 from "../../assets/brand-6.png";

const Partners = () => {
  const partnersData = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
  ];

  return (
    <section className="partners">
      <div className="partners__wrapper">
        <h2>
          Our <span className="highlight">Partners</span>
        </h2>
        <Marquee speed={45} pauseOnHover={true} loop={0}>
          {partnersData.map((partner) => (
            <div className="partner__wrapper">
              <img src={partner} alt="partnerLogo" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
