import "./Plans.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Plans = () => {
  const plansData = [
    {
      title: "STARTER",
      price: "FREE",
      benefnts: ["Limited Access", "Source Files", "Enhanced Security"],
      taunt: "Try",
    },
    {
      title: "JUNIOR",
      price: "€39/mo",
      benefnts: [
        "Limited Access",
        "Source Files",
        "Free Appointments",
        "Enhanced Security",
      ],
      taunt: "Buy",
    },
    {
      title: "PRO",
      price: "€59/mo",
      benefnts: [
        "Full Access",
        "Source Files",
        "Free Appointments",
        "Enhanced Security",
        "Gift",
      ],
      taunt: "Buy",
    },
  ];
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
                  {item.benefnts.map((benefit) => (
                    <li>
                      <AiOutlineCheckCircle /> {benefit}
                    </li>
                  ))}
                </ul>
                <div className="plans__btn">
                  <button className="primary__btn">{item.taunt}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
