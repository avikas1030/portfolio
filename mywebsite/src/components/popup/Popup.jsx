import React, { useState, useEffect } from "react";
import "./popup.css";

const Popup = () => {
  const [visible, setVisible] = useState(true);

  // Auto close after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // 1 second = 1000 ms

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (!visible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={() => setVisible(false)}>
          ✖
        </button>
        <h2>👋 Welcome!</h2>
        <p>
          Thanks for visiting my website.  
          I’m actively working on improving this site, so you may notice changes 
          and updates. 🚀  
        </p>
        <p>Looking forward to showcasing my skills to recruiters like you!</p>
      </div>
    </div>
  );
};

export default Popup;
