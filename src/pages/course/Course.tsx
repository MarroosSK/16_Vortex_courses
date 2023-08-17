import { useState } from "react";
import "./Course.css";
import { categoryData, coursesData } from "../../utils/dummyData";

const Course = () => {
  const [word, setWord] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredByCategory =
    activeCategory === "All"
      ? coursesData
      : coursesData.filter(
          (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const filteredBySearch = filteredByCategory.filter((item) =>
    item.title.toLowerCase().includes(word)
  );

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="course">
      <div className="course__top">
        <h2>Courses</h2>
        <div className="course__divider"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          dolore?
        </p>
      </div>
      <div className="container">
        <div className="course__wrapper">
          <div className="course__left-category">
            <h2>Categories</h2>
            <ul className="course__left-category-list">
              {categoryData.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(cat.title)}
                  className={activeCategory === cat.title ? "active-cat" : ""}
                >
                  {cat.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="course__right-course">
            <div className="course__right-course-top">
              <p>Courses</p>
              <div className="course__right-course-top-form">
                <input
                  type="text"
                  placeholder="search course"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </div>
            </div>
            {filteredBySearch.length === 0 && <p>No such Course</p>}
            {filteredBySearch.map((item, index) => (
              <div className="courseItem__wrapper" key={index}>
                <div className="courseItem__wrapper-text">
                  <h5>{item.title}</h5>
                  <h6 className="highlight">{item.category}</h6>
                  <p>{item.desc}</p>
                  <div className="courseItem__wrapper-text-pricing">
                    <p>{item.startingDate}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
                <div className="courseItem__wrapper-img">
                  <img src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
