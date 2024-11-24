import React, { useEffect, useState } from "react";
import './DataTable.css';
import axios from "axios";


const DataTable = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get("http://localhost:5000/api/items")
      .then(response => setItems(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
  };

  const thTdStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
  };

  return (
    <div>
      
      <table className="min-w-full border-collapse border border-gray-300" >
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">PC Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">No</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">State</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Winning Candidate</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Elector</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Votes</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Turnout</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Margin</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Margin %</th>
          </tr>
        </thead>
        <tbody className="flex-col items-center justify-center">
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.PCName}</td>
              <td className="border border-gray-300 px-4 py-2">{item.No}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Type}</td>
              <td className="border border-gray-300 px-4 py-2">{item. State}</td>
              <td className="border border-gray-300 px-4 py-2">{item.WinningCandidate}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Electors}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Votes}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Turnout}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Margin}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Margin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;