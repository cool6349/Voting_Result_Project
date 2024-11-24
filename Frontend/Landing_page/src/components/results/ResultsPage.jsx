import React from "react";
import { useLocation } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  
  // Use URLSearchParams to get the query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const search1 = queryParams.get("search1");
  const search2 = queryParams.get("search2");

  return (
    <div className="results-page">
      <h2 className="text-xl font-bold">Search Results</h2>
      <p>
        Showing results for:
        <ul>
          <li><strong>Search Term 1:</strong> {search1}</li>
          <li><strong>Search Term 2:</strong> {search2}</li>
        </ul>
      </p>
      {/* You can fetch results based on these search terms */}
      <div className="results">
        {/* Display your results here, or fetch data from an API */}
        <p>Results for {search1} and {search2}...</p>
      </div>
    </div>
  );
};

export default ResultsPage;
