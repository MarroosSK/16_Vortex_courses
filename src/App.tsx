import { useState, useEffect } from "react";
import "./App.css";
import { useScrollTop } from "./hooks/useScrollTop";
import Home from "./pages/home/Home";

function App() {
  const { isScrolled } = useScrollTop();
  const [isVisible, setIsVisible] = useState(false);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (isScrolled) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isScrolled]);

  return (
    <div style={{ position: "relative" }}>
      <Home />
      <button
        id="scrollToTopButton"
        className={isVisible ? "active" : ""}
        onClick={handleTop}
      >
        &#8593;
      </button>
    </div>
  );
}

export default App;
