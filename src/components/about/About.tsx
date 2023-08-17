import { aboutData } from "../../utils/dummyData";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          {aboutData.map((item, index) => (
            <div className="item__wrapper" key={index}>
              <div className="about__icon">
                <img src={item.icon} />
              </div>
              <div className="about__text">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
