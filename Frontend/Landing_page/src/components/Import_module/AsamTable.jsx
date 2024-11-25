import React, { useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import SearchForm from "../results/SearchForm";
import ResultsPage from "../results/ResultsPage";

const AsamTable = () => {
  const { State, year } = useParams();

  const [filters, setFilters] = useState({
    PC_Name: "",
    No: "",
    Type: "",
    State: "",
    Candidate: "",
    Party: "",
    Electors: "",
    Votes: "",
   
  });

  // Example data
  const data = [
    { PC_Name: 'Barpeta',No: 3, Type: 'GEN', State: 'Assam', Candidate: 'Phani Bhusan Choudhury', Party: 'Asom Gana Parishad', Electors: '19,66,847', Votes: '16,85,943', turnout: '85.7%', margin: '2,22,351', marginPercent: '13.2%' },
    { PC_Name: 'Darrang-Udalguri',No: 4, Type: 'GEN', State: 'Assam', Candidate: 'Dilip Saikia', Party: 'Bharatiya Janata Party', Electors: '22,09,314', Votes: '18,11,200', turnout: '82.0%', margin: '3,29,012', marginPercent: '18.2%' },
    { PC_Name: 'Dhubri',No: 2, Type: 'GEN', State: 'Assam', Candidate: 'Rakiul Hussain', Party: 'Indian National Congress', Electors: '26,00,827', Votes: '24,53,608', turnout: '92.2%', margin: '10,12,476', marginPercent: '41.3%' },
    { PC_Name: 'Dibrugarh',No: 13, Type: 'GEN', State: 'Assam', Candidate: 'Sarbananda Sonowal', Party: 'Bharatiya Janata Party', Electors: '16,59,588', Votes: '12,78,322', turnout: '77.0%', margin: '2,79,321', marginPercent: '21.9%' },
    { PC_Name: 'Diphu',No: 6, Type: 'ST', State: 'Assam', Candidate: 'Amarsing Tisso', Party: 'Bharatiya Janata Party', Electors: '9,01,032', Votes: '6,82,827', turnout: '75.8%', margin: '1,47,603', marginPercent: '21.6%' },
    { PC_Name: 'Guwahati',No: 5, Type: 'GEN', State: 'Assam', Candidate: 'Bijuli Kalita Medhi', Party: 'Bharatiya Janata Party', Electors: '20,36,846', Votes: '15,99,389', turnout: '78.5%', margin: '2,51,090', marginPercent: '15.7%' },
    { PC_Name: 'Jorhat',No: 14, Type: 'GEN', State: 'Assam', Candidate: 'Gaurav Gogoi', Party: 'Indian National Congress', Electors: '17,27,121', Votes: '13,91,160', turnout: '80.6%', margin: '1,44,393', marginPercent: '10.4%' },
    { PC_Name: 'Karimganj',No: 7, Type: 'SC', State: 'Assam', Candidate: 'Kripanath Mallah', Party: 'Bharatiya Janata Party', Electors: '14,12,148', Votes: '11,46,882', turnout: '81.2%', margin: '18,360', marginPercent: '1.6%' },
    { PC_Name: 'Kaziranga',No: 10, Type: 'GEN', State: 'Assam', Candidate: 'Kamakhya Prasad Tasa', Party: 'Bharatiya Janata Party', Electors: '20,50,126', Votes: '16,29,937', turnout: '79.5%', margin: '2,48,947', marginPercent: '15.3%' },
    { PC_Name: 'Kokrajhar',No: 1, Type: 'ST', State: 'Assam', Candidate: 'Joyanta Basumatary', Party: 'United Peoples Party Liberal', Electors: '14,84,571', Votes: '12,41,496', turnout: '83.6%', margin: '51,583', marginPercent: '4.2%' },
    { PC_Name: 'Lakhimpur',No: 12, Type: 'GEN', State: 'Assam', Candidate: 'Pradan Braruah', Party: 'Bharatiya Janata Party', Electors: '15,77,234', Votes: '12,11,214', turnout: '76.8%', margin: '2,01,257', marginPercent: '16.6%' },
    { PC_Name: 'Nagaon',No: 9, Type: 'GEN', State: 'Assam', Candidate: 'Pradyut Bordoloi', Party: 'Indian National Congress', Electors: '18,17,204', Votes: '15,49,998', turnout: '85.3%', margin: '2,12,231', marginPercent: '13.7%' },
    { PC_Name: 'Silchar',No: 8, Type: 'GEN', State: 'Assam', Candidate: 'Parimal Saklabaidya', Party: 'Bharatiya Janata Party', Electors: '13,69,578', Votes: '10,89,426', turnout: '79.5%', margin: '2,64,311', marginPercent: '24.3%' },
    { PC_Name: 'Sonitpur',No: 11, Type: 'GEN', State: 'Assam', Candidate: 'Ranjit Dutta', Party: 'Bharatiya Janata Party', Electors: '16,33,800', Votes: '12,88,468', turnout: '78.9%', margin: '23,61,408', marginPercent: '28.0%' }
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
      <h1 className="text-3xl font-bold mb-6 text-center">PC Election Results for Assam(2024) {State}, {year}</h1>

      {/* Filter Row */}
      <div className="mb-6 grid grid-cols-4 gap-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {Object.keys(filters).map((key, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              Type="text"
              placeholder={`Search ${key}`}
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring focus:ring-blue-300"
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
                "#", "PC Name", "No", "Type", "State", "Winning Candidate", "Party", "Electors", "Votes", "Turnout", "Margin", "Margin %"
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
                  <td className="border-b px-4 py-2">{row.PC_Name}</td>
                  <td className="border-b px-4 py-2">{row.No}</td>
                  <td className="border-b px-4 py-2">{row.Type}</td>
                  <td className="border-b px-4 py-2">{row.State}</td>
                  <td className="border-b px-4 py-2">{row.Candidate}</td>
                  <td className="border-b px-4 py-2">{row.Party}</td>
                  <td className="border-b px-4 py-2">{row.Electors}</td>
                  <td className="border-b px-4 py-2">{row.Votes}</td>
                  <td className="border-b px-4 py-2">{row.turnout}</td>
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

export default AsamTable;
