import React from 'react'

import "./Arrows.component.css"; // Import your custom CSS for styling

export const PrevArrow = ({ onClick }) => (
  <button
    className="custom-prev-arrow"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    &lt; {/* or use an SVG icon */}
  </button>
);

export const NextArrow = ({ onClick }) => (
  <button
    className="custom-next-arrow"
    onClick={onClick}
    aria-label="Next Slide"
  >
    &gt; {/* or use an SVG icon */}
  </button>
);


export default NextArrow(PrevArrow);