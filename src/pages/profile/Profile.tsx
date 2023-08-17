import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";
import coverPic from "../../assets/coverPic.jpg";
import profilePic from "../../assets/profilePic.jpg";
import { coursesData, socialIcons } from "../../utils/dummyData";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="profile">
      <div className="container">
        <div className="profile__Wrapper">
          {/* TOP */}
          <div className="profile__top">
            <img src={coverPic} alt="" />
            <div className="profile__top-pic">
              <img src={profilePic} alt="" />
            </div>
          </div>
          {/* MID */}
          <div className="profile__middle">
            <div className="profile__middle-details">
              <h5>{currentUser?.name}</h5>
              <ul className="profile__middle-social">
                {socialIcons.map((item, index) => (
                  <li className="profile__middle-social-icon" key={index}>
                    {item.icon}
                  </li>
                ))}
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                commodi esse alias inventore suscipit! Deserunt labore
                distinctio quis exercitationem voluptatum!
              </p>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="profile__bottom">
            <h2>
              My <span className="highlight">Courses</span>
            </h2>
            <div className="profile__bottom-courses">
              {coursesData.slice(0, 2).map((item, index) => (
                <div className="profileItem__wrapper" key={index}>
                  <div className="profileItem__wrapper-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="profileItem__wrapper-text">
                    <h5>{item.title}</h5>
                    <h6 className="highlight">{item.category}</h6>
                    <p>{item.desc.slice(0, 250)}...</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="courses__btn">
              <button className="primary__btn">see more &#8594;</button>
            </div>
            <div className="profile__bottom-recommended">
              <h2>
                Similiar <span className="highlight">Courses</span>
              </h2>
              <div className="profile__bottom-recommended__wrapper">
                {coursesData.slice(3).map((item, index) => (
                  <div className="profileRecommended__wrapper" key={index}>
                    <div className="profileRecommended__wrapper-text">
                      <h5>{item.title}</h5>
                    </div>
                    <div className="profileRecommended__wrapper-img">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="courses__btn">
                <button className="primary__btn">see more &#8594;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
