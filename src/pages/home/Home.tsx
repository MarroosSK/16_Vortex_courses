import {
  About,
  Categories,
  Counter,
  Courses,
  Footer,
  Header,
  Hero,
  Instructors,
  Partners,
  Plans,
  Questions,
  Subscribe,
  Testimonials,
} from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Counter />
      <Categories />
      <Instructors />
      <Partners />
      <Courses />
      <Testimonials />
      <Plans />
      <Questions />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Home;
