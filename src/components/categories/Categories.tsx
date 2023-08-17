import { categoryData } from "../../utils/dummyData";
import "./Categories.css";

const Categories = () => {
  return (
    <section id="categories" className="category">
      <div className="container">
        <div className="category__wrapper">
          <div className="top__heading">
            <h2>
              Vortex <span className="highlight">Category</span>
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
