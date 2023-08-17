import { coursesData } from "../../utils/dummyData";
import "./Courses.css";

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <div className="courses__wrapper">
          <div className="courses__top">
            <h2>Pick from Many</h2>
            <h2 className="highlight">available Courses</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, esse!
            </p>
          </div>

          <div className="courses__bottom">
            {coursesData.map((item, index) => (
              <div
                className="coursesItem__wrapper"
                key={index}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  objectFit: "contain",
                }}
              >
                <div className="coursesItem__wrapper-text">
                  <h5>{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="courses__btn">
          <button className="primary__btn">see more &#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
