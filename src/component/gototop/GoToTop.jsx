import React, { useEffect, useState } from "react";
import "./GoToTop.css";
import { IoMdArrowUp } from "react-icons/io";
function GoToTop() {
  const [IsVisible, setIsVisible] = useState(false);
  const GoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let topHeidden = 1400;
    const winscroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(
    //   "~file: GoToTop.jsx ~ line 13 ~ listenscroll ~ winscroll",
    //   winscroll
    // );
    if (winscroll > topHeidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center">
      {IsVisible && (
        <button className="go-btn" onClick={GoTop}>
          <IoMdArrowUp className="icon--btn" />
        </button>
      )}
    </div>
  );
}

export default GoToTop;
