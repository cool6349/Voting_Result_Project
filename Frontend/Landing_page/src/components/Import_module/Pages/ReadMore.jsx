import React, { useState } from 'react';

const ReadMore = ({ text, maxLength = 100 }) => {
  // State to manage whether to show full text or short text
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle between full text and short text
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Display either the full text or a truncated version */}
      <p>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
        {/* Show "Read More" or "Read Less" button based on state */}
        <span
          onClick={toggleReadMore}
          className="text-blue-500 cursor-pointer ml-2"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
      </p>
    </div>
  );
};

export default ReadMore;
