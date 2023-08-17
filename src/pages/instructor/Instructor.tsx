import { instructorsData } from "../../utils/dummyData";
import "./Instructor.css";

const Instructor = () => {
  const moreInstructors = [...instructorsData, ...instructorsData];
  return (
    <section className="teacher">
      <div className="teacher__top">
        <h2>Teachers</h2>
        <div className="teacher__divider"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          dolore?
        </p>
      </div>
      <div className="container">
        <div className="teacher__bottom">
          {moreInstructors.map((item, index) => (
            <div className="teacher__wrapper" key={index}>
              <div className="teacher__wrapper-img">
                <img src={item.photo} alt="" />
              </div>
              <div className="teacher__wrapper-text">
                <h5>{item.name}</h5>
                <p>{item.area}</p>
                <p>{item.about}</p>
              </div>
              <ul className="teacher__wrapper-social">
                <li>{item.social.fb}</li>
                <li>{item.social.insta}</li>
                <li>{item.social.linked}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="courses__btn">
        <button className="primary__btn">show more &#8594;</button>
      </div>
    </section>
  );
};

export default Instructor;
