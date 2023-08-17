import { plansData } from "../../utils/dummyData";
import "./Plans.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Plans = () => {
  return (
    <section className="plans">
      <div className="container">
        <div className="plans__wrapper">
          <div className="plans__top">
            <h2>
              Vortex <span className="highlight">Study Plan</span>
            </h2>
          </div>
          <div className="plans__bottom">
            {plansData.map((item, index) => (
              <div className="plansItem__wrapper" key={index}>
                <h5>{item.title}</h5>
                <p>{item.price}</p>
                <ul className="plansItem__list">
                  {item.benefnts.map((benefit, index2) => (
                    <li key={index2}>
                      <AiOutlineCheckCircle /> {benefit}
                    </li>
                  ))}
                  <div className="plans__btn">
                    <button className="primary__btn">{item.taunt}</button>
                  </div>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
