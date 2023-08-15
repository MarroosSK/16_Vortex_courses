import { useState, useEffect } from "react";
import "./Loading.css";
import Home from "../home/Home";
import nftIcon from "../../assets/cyclone.png";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulujeme načítanie s oneskorením
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="loading rotate-center">
      <img src={nftIcon} alt="" />
    </div>
  ) : (
    <Home />
  );
};

export default Loading;
