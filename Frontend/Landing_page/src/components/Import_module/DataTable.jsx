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
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.Party}</td>
              <td>{item. Votes}</td>
              <td>{item.State}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;