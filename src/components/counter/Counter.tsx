import "./Counter.css";
import CountUp from "react-countup";
import people from "../../assets/people2.jpg";

const Counter = () => {
  const counterData = [
    {
      title: "YEARS",
      value: 7,
      prefixValue: "",
      suffixValue: "+",
    },
    {
      title: "COUNTRIES",
      value: 59,
      prefixValue: "",
      suffixValue: "",
    },
    {
      title: "INSTRUCTORS",
      value: 150,
      prefixValue: "+",
      suffixValue: "",
    },
    {
      title: "STUDENTS",
      value: 300,
      prefixValue: "",
      suffixValue: "K",
    },
  ];
  return (
    <section className="counter">
      <div className="container">
        <div className="counter__wrapper">
          <div className="left__side">
            <img src={people} alt="people-study" />
          </div>
          <div className="right__side">
            <h2>Growing Vortex</h2>
            <h2 className="highlight">Community</h2>
            <p>
              With more than 7 years of experience in education and online
              teaching field, we guarantee the best service for test
              preparations and revisions for all popular test systems.
            </p>
            <div className="right__side-item">
              {counterData.map((item, index) => (
                <div className="counteritem__wrapper" key={index}>
                  <CountUp
                    start={0}
                    end={item.value}
                    delay={0}
                    prefix={item.prefixValue}
                    suffix={item.suffixValue}
                    className="number"
                  />
                  <h5>{item.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
