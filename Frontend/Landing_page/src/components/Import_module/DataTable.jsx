import React, { useEffect, useState } from "react";
import axios from "axios";

const DataTable = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get("http://localhost:5000/api/items")
      .then(response => setItems(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Data Table</h2>
      <table className="bg-slate-400" border="6"  cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>PC Name</th>
            <th>No</th>
            <th>Type</th>
            <th>State</th>
            <th>Winning Candidate</th>
            <th>Elector</th>
            <th>Votes</th>
            <th>Turnout</th>
            <th>Margin</th>
            <th>Margin %</th>
          </tr>
        </thead>
        <tbody className="justify-center">
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.PCName}</td>
              <td>{item.No}</td>
              <td>{item.Type}</td>
              <td>{item. State}</td>
              <td>{item.WinningCandidate}</td>
              <td>{item.Electors}</td>
              <td>{item.Votes}</td>
              <td>{item.Turnout}</td>
              <td>{item.Margin}</td>
              <td>{item.Margin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;