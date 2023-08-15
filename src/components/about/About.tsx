import "./About.css";
import learnFast from "../../assets/mortarboard.png";
import learnExpert from "../../assets/book.png";
import learnOnline from "../../assets/global-network.png";

const About = () => {
  const aboutData = [
    {
      title: "Learn From Experts",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Perspiciatis, corporis.`,
      icon: learnFast,
    },
    {
      title: "Learn Fast",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Perspiciatis, corporis.`,
      icon: learnExpert,
    },
    {
      title: "Learn Online",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Perspiciatis, corporis.`,
      icon: learnOnline,
    },
  ];
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
