import "./Categories.css";
import img1 from "../../assets/cat2.png";
import img2 from "../../assets/cat3.png";
import img3 from "../../assets/cat1.png";
import img4 from "../../assets/cat4.png";

const Categories = () => {
  const categoryData = [
    {
      title: "Business",
      desc: "2 Courses",
      icon: img1,
      color: "rgba(124, 58, 237, .9)",
    },
    {
      title: "Design",
      desc: "3 Courses",
      icon: img2,
      color: "rgba(154, 113, 225, 0.9)",
    },
    {
      title: "Photography",
      desc: "4 Courses",
      icon: img4,
      color: "rgba(173, 144, 223, 0.9)",
    },
    {
      title: "Web Dev",
      desc: "5 Courses",
      icon: img3,
      color: "rgba(139, 85, 233, 0.9)",
    },
  ];

  return (
    <section id="categories" className="category">
      <div className="container">
        <div className="category__wrapper">
          <div className="top__heading">
            <h2>
              Vortex <span className="highlight">Categories</span>
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, eaque!
            </p>
          </div>
          <div className="bottom__list">
            {categoryData.map((item, index) => (
              <div
                className="categoryItem__wrapper"
                key={index}
                style={{ backgroundColor: item.color }}
              >
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                <img src={item.icon} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
