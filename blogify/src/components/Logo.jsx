import React from "react";

// eslint-disable-next-line no-unused-vars
function Logo({ width = "10px" }) {
  return (
    <img
      src="https://cdn-icons-png.freepik.com/256/9291/9291819.png?uid=R192448459&ga=GA1.1.2041689985.1742446364&semt=ais_incoming"
      alt="Blogify Logo"
      loading="lazy"
      className={`${width} h-8 object-contain transition-all duration-200`}
    />
  );
}

export default Logo;
