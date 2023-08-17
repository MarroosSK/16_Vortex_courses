import { instructorsData } from "../../utils/dummyData";
import "./Instructors.css";

const Instructors = () => {
  return (
    <section className="instructors">
      <div className="container">
        <div className="instructors__wrapper">
          <div className="instructors__wrapper-top">
            <h2>
              Experienced <span className="highlight">Teachers</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              dolore?
            </p>
          </div>
          <div className="instructors__wrapper-bottom">
            {instructorsData.map((item, index) => (
              <div className="instructorItem__wrapper" key={index}>
                <div className="insturctorItem__wrapper-img">
                  <img src={item.photo} alt="" />
                  <ul className="insturctorItem__wrapper-img-social">
                    <li>{item.social.fb}</li>
                    <li>{item.social.insta}</li>
                    <li>{item.social.linked}</li>
                  </ul>
                </div>
                <div className="insturctorItem__wrapper-text">
                  <h5>{item.name}</h5>
                  <p>{item.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="instructor__btn">
          <button className="primary__btn">see more &#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
