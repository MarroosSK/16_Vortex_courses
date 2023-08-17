import { useState, useEffect } from "react";
import "./Loading.css";
import nftIcon from "../../assets/cyclone.png";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulujeme načítanie s oneskorením
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.location.reload();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <div className="loading rotate-center">
      <div className="rotate-center">
        <img src={nftIcon} alt="" />
      </div>
    </div>
  );
};

export default Loading;
