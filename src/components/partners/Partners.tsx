import { partnersData } from "../../utils/dummyData";
import "./Partners.css";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__wrapper">
        <h2>
          Our <span className="highlight">Partners</span>
        </h2>
        <Marquee speed={45} pauseOnHover={true} loop={0}>
          {partnersData.map((partner, index) => (
            <div className="partner__wrapper" key={index}>
              <img src={partner} alt="partnerLogo" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
