import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./UpButton.scss";

const UpButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <span className="start-button">
      <button
        className="go-up"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Go Up"
        disabled={isAtTop}
      >
        <FaArrowUp className="up-button" />
      </button>
    </span>
  );
};

export default UpButton;
