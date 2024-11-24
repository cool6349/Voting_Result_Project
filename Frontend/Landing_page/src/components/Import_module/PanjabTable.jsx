import React, { useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import SearchForm from "../results/SearchForm";
import ResultsPage from "../results/ResultsPage";

const StateYearPage = () => {
  const { State, year } = useParams();

  const [filters, setFilters] = useState({
    PCName : "",
    No: "",
    Type: "",
    State: "",
    Candidate: "",
    Party: "",
    Elector: "",
    Votes: "",
   
  });

  // Example data
  const data = [
    { PCName: 'Amritsar', No: 2, Type: 'GEN', State: 'Punjab', Candidate: 'Gurjeet Singh Aujla', Party: 'Indian National Congress', Elector: '16,11,263', Votes: '9,05,656', turNout: '56.2%', margin: '40,301', marginPercent: '4.4%' },
    { PCName: 'Anandpur Sahib', No: 6, Type: 'GEN', State: 'Punjab', Candidate: 'Malvinder Singh Kang', Party: 'Aam Aadmi Party', Elector: '17,32,211', Votes: '10,77,123', turNout: '62.2%', margin: '10,846', marginPercent: '1.0%' },
    { PCName: 'Bathinda', No: 11, Type: 'GEN', State: 'Punjab', Candidate: 'Harsimrat Kaur Badal', Party: 'Shiromani Akali Dal', Elector: '16,51,188', Votes: '11,51,170', turNout: '69.7%', margin: '49,656', marginPercent: '4.3%' },
    { PCName: 'Faridkot', No: 9, Type: 'SC', State: 'Punjab', Candidate: 'Sarabjeet Singh Khalsa', Party: 'Independent', Elector: '15,94,033', Votes: '10,14,455', turNout: '63.6%', margin: '70,053', marginPercent: '6.9%' },
    { PCName: 'Fatehgarh Sahib', No: 8, Type: 'SC', State: 'Punjab', Candidate: 'Amar Singh', Party: 'Indian National Congress', Elector: '15,52,567', Votes: '9,74,256', turNout: '62.8%', margin: '34,202', marginPercent: '3.5%' },
    { PCName: 'Ferozpur', No: 10, Type: 'GEN', State: 'Punjab', Candidate: 'Sher Singh Ghubaya', Party: 'Indian National Congress', Elector: '16,70,008', Votes: '11,25,115', turNout: '67.4%', margin: '3,242', marginPercent: '0.3%' },
    { PCName: 'Gurdaspur', No: 1, Type: 'GEN', State: 'Punjab', Candidate: 'Sukhjinder Singh Randhawa', Party: 'Indian National Congress', Elector: '16,05,204', Votes: '10,77,826', turNout: '67.2%', margin: '82,861', marginPercent: '7.7%' },
    { PCName: 'Hoshiarpur', No: 5, Type: 'SC', State: 'Punjab', Candidate: 'Dr. Raj Kumar Chabbewal', Party: 'Aam Aadmi Party', Elector: '16,01,826', Votes: '9,48,485', turNout: '59.2%', margin: '44,111', marginPercent: '4.7%' },
    { PCName: 'Jalandhar', No: 4, Type: 'SC', State: 'Punjab', Candidate: 'Charanjit Singh Channi', Party: 'Indian National Congress', Elector: '16,54,005', Votes: '9,89,107', turNout: '59.8%', margin: '24,360', marginPercent: '2.5%' },
  ];
  const filteredData = data.filter((row) =>
    Object.keys(filters).every((key) =>
      filters[key] ? row[key]?.toString().toLowerCase().includes(filters[key].toLowerCase()) : true
    )
  );

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">PC Election Results for Punjab(2024) {State} {year}</h1>

      {/* Filter Row */}
      <div className="mb-6 grid grid-cols-4 gap-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {Object.keys(filters).map((key, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              Type="text"
              placeholder={`Search ${key}`}
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-None focus:ring focus:ring-blue-300"
              value={filters[key]}
              onChange={(e) => handleFilterChange(key, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              {[
                "#", "PC Name", "No", "Type", "State", "Winning Candidate", "Party", "Elector", "Votes", "TurNout", "Margin", "Margin %"
              ].map((header, index) => (
                <th key={index} className="px-4 py-3 text-left text-sm font-semibold text-gray-600 border-b border-gray-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr key={index} className="even:bg-gray-50 hover:bg-gray-100 transition duration-300">
                  <td className="border-b px-4 py-2">{index + 1}</td>
                  <td className="border-b px-4 py-2">{row.PCName }</td>
                  <td className="border-b px-4 py-2">{row.No}</td>
                  <td className="border-b px-4 py-2">{row.Type}</td>
                  <td className="border-b px-4 py-2">{row.State}</td>
                  <td className="border-b px-4 py-2">{row.Candidate}</td>
                  <td className="border-b px-4 py-2">{row.Party}</td>
                  <td className="border-b px-4 py-2">{row.Elector}</td>
                  <td className="border-b px-4 py-2">{row.Votes}</td>
                  <td className="border-b px-4 py-2">{row.turNout}</td>
                  <td className="border-b px-4 py-2">{row.margin}</td>
                  <td className="border-b px-4 py-2">{row.marginPercent}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={12} className="text-center py-4 text-gray-500">No results found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StateYearPage;
