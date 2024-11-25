import React, { useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import SearchForm from "../results/SearchForm";
import ResultsPage from "../results/ResultsPage";

const StateYearPage = () => {
  const { State, year } = useParams();

  const [filters, setFilters] = useState({
    PCName : "",
    NO: "",
    Type: "",
    State: "",
    Candidate: "",
    Party: "",
    Elector: "",
    Votes: "",
   
  });

  // Example data
  const data = [
    { PCName : "Aska", NO: 19, Type: "GEN", State: "Orissa", Candidate: "Anita Subhadarshini", Party: "Bharatiya Janata Party", Elector: "16,20,974", Votes: "10,17,914", turNOut: "62.8%", margin: "2,51,567", marginPercent: "15.9%" },
    { PCName : "Balasore", NO: 6, Type: "GEN", State: "Orissa", Candidate: "Pratap Chandra Sarangi", Party: "Bharatiya Janata Party", Elector: "16,08,014", Votes: "12,39,635", turNOut: "77.1%", margin: "1,47,156", marginPercent: "11.9%" },
    { PCName : "Bargarh", NO: 1, Type: "GEN", State: "Orissa", Candidate: "Pradeep Purohit", Party: "Bharatiya Janata Party", Elector: "15,91,374", Votes: "13,09,864", turNOut: "82.3%", margin: "2,51,667", marginPercent: "19.2%" },
    { PCName : "Berhampur", NO: 20, Type: "GEN", State: "Orissa", Candidate: "Dr. Pradeep Kumar Panigrahy", Party: "Bharatiya Janata Party", Elector: "15,91,380", Votes: "10,42,923", turNOut: "65.5%", margin: "1,65,476", marginPercent: "15.9%" },
    { PCName : "Bhadrak", NO: 7, Type: "SC", State: "Orissa", Candidate: "Avimanyu Sethi", Party: "Bharatiya Janata Party", Elector: "17,70,915", Votes: "12,97,377", turNOut: "73.3%", margin: "91,544", marginPercent: "7.1%" },
    { PCName : "Bhubaneswar", NO: 18, Type: "GEN", State: "Orissa", Candidate: "Aparajita Sarangi", Party: "Bharatiya Janata Party", Elector: "16,72,774", Votes: "10,82,215", turNOut: "64.7%", margin: "35,152", marginPercent: "3.2%" },
    { PCName : "Bolangir", NO: 10, Type: "GEN", State: "Orissa", Candidate: "Sangeeta Kumari Singh Deo", Party: "Bharatiya Janata Party", Elector: "17,10,744", Votes: "10,77,744", turNOut: "63%", margin: "1,32,046", marginPercent: "8%" },
    { PCName : "Cuttack", NO: 14, Type: "GEN", State: "Orissa", Candidate: "Bhartruhari Mahtab", Party: "Bharatiya Janata Party", Elector: "15,71,622", Votes: "11,20,795", turNOut: "71.3%", margin: "57,077", marginPercent: "5.1%" },
    { PCName : "Dhenkanal", NO: 9, Type: "GEN", State: "Orissa", Candidate: "Rudra Narayan Pani", Party: "Bharatiya Janata Party", Elector: "15,29,785", Votes: "11,91,673", turNOut: "77.9%", margin: "76,567", marginPercent: "6.4%" },
    { PCName : "Jagatsinghpur", NO: 16, Type: "SC", State: "Orissa", Candidate: "Bibhu Prasad Tarai", Party: "Bharatiya Janata Party", Elector: "16,20,814", Votes: "12,86,287", turNOut: "79.3%", margin: "42,056", marginPercent: "3.2%" },
    { PCName : "Jajpur", NO: 8, Type: "SC", State: "Orissa", Candidate: "Rabindra Narayan", Party: "Bharatiya Janata Party", Elector: "15,45,664", Votes: "11,61,208", turNOut: "75.1%", margin: "1,587", marginPercent: "0.1%" },
    { PCName : "Kalahandi", NO: 11, Type: "GEN", State: "Orissa", Candidate: "Malvika Devi", Party: "Bharatiya Janata Party", Elector: "17,00,780", Votes: "13,34,244", turNOut: "78.5%", margin: "1,33,813", marginPercent: "10%" },
    { PCName : "Kandhamal", NO: 4, Type: "GEN", State: "Orissa", Candidate: "Sukanta Kumar Panigrahy", Party: "Bharatiya Janata Party", Elector: "13,39,090", Votes: "9,66,091", turNOut: "72.1%", margin: "2,175", marginPercent: "0.2%" },
    { PCName : "Kendrapara", NO: 15, Type: "GEN", State: "Orissa", Candidate: "Baijayant Panda", Party: "Bharatiya Janata Party", Elector: "17,92,733", Votes: "12,77,108", turNOut: "71.2%", margin: "66,535", marginPercent: "5.2%" },
    { PCName : "Keonjhar", NO: 13, Type: "ST", State: "Orissa", Candidate: "Ananta Nayak", Party: "Bharatiya Janata Party", Elector: "16,72,615", Votes: "12,56,615", turNOut: "75%", margin: "1,67,665", marginPercent: "13.4%" },
    { PCName : "Koraput", NO: 21, Type: "ST", State: "Orissa", Candidate: "Saptagiri Sankar Ulaka", Party: "Indian National Congress", Elector: "14,80,922", Votes: "11,48,842", turNOut: "77.6%", margin: "1,47,744", marginPercent: "12.9%" },
    { PCName : "Mayurbhanj", NO: 5, Type: "ST", State: "Orissa", Candidate: "Naba Charan Majhi", Party: "Bharatiya Janata Party", Elector: "15,42,927", Votes: "11,74,050", turNOut: "76.1%", margin: "2,19,334", marginPercent: "18.7%" },
    { PCName : "Nabarangpur", NO: 12, Type: "ST", State: "Orissa", Candidate: "Balabhadra Majhi", Party: "Bharatiya Janata Party", Elector: "14,14,140", Votes: "12,42,455", turNOut: "87.8%", margin: "1,46,425", marginPercent: "12.1%" },
    { PCName : "Puri", NO: 17, Type: "GEN", State: "Orissa", Candidate: "Sambit Patra", Party: "Bharatiya Janata Party", Elector: "15,86,465", Votes: "11,96,938", turNOut: "75.5%", margin: "1,04,709", marginPercent: "8.7%" },
    { PCName : "Sambalpur", NO: 3, Type: "GEN", State: "Orissa", Candidate: "Dharmendra Pradhan", Party: "Bharatiya Janata Party", Elector: "14,99,728", Votes: "11,96,747", turNOut: "79.8%", margin: "1,19,836", marginPercent: "10.0%" },
    { PCName : "Sundargarh", NO: 2, Type: "ST", State: "Orissa", Candidate: "Jual Oram", Party: "Bharatiya Janata Party", Elector: "15,76,105", Votes: "11,55,777", turNOut: "73.3%", margin: "1,38,808", marginPercent: "12.0%" },
    
    // Add more rows as needed
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
      <h1 className="text-3xl font-bold mb-6 text-center">PC Election Results for Odisha(2024) {State} {year}</h1>

      {/* Filter Row */}
      <div className="mb-6 grid grid-cols-4 gap-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {Object.keys(filters).map((key, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              Type="text"
              placeholder={`Search ${key}`}
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-NOne focus:ring focus:ring-blue-300"
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
                "#", "PC Name", "NO", "Type", "State", "Winning Candidate", "Party", "Elector", "Votes", "TurNOut", "Margin", "Margin %"
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
                  <td className="border-b px-4 py-2">{row.NO}</td>
                  <td className="border-b px-4 py-2">{row.Type}</td>
                  <td className="border-b px-4 py-2">{row.State}</td>
                  <td className="border-b px-4 py-2">{row.Candidate}</td>
                  <td className="border-b px-4 py-2">{row.Party}</td>
                  <td className="border-b px-4 py-2">{row.Elector}</td>
                  <td className="border-b px-4 py-2">{row.Votes}</td>
                  <td className="border-b px-4 py-2">{row.turNOut}</td>
                  <td className="border-b px-4 py-2">{row.margin}</td>
                  <td className="border-b px-4 py-2">{row.marginPercent}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={12} className="text-center py-4 text-gray-500">NO results found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StateYearPage;
