import React, { useState, useEffect } from "react";
import Demo from "./Demo";
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { useTable } from 'react-table';
import axios from "axios"; // For fetching data

// Registering necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ChhattisGarh = () => {
  const [data, setData] = useState([]);  // State to hold the fetched data
  const [loading, setLoading] = useState(true); // Loading state for API call
  const [error, setError] = useState(null); // Error state for API call
  const [search, setSearch] = useState({
    id: "",
    PC_Name: "",
    No: "",
    Type: "",
    State: "",
    Winning_Candidate: "",
    Party: "",
    Electors: "",
    Votes: "",
    Turnout: "",
    Margin: "",
    Margin_p: ""
  });  // State to hold search input for each column

  // Fetch data from JSON file or API
  useEffect(() => {
    axios.get("/data.json")
      .then(response => {
        setData(response.data);  // Set the fetched data to state
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setError("Error fetching data");  // Set error message if there's an error
        setLoading(false);  // Stop loading
      });
  }, []);

  // Handle input change for search fields
  const handleSearchChange = (e, column) => {
    setSearch({
      ...search,
      [column]: e.target.value,
    });
  };

  // Filter the data based on the search input for each column
  const filteredData = data.filter((row) => {
    return (
      row.id.toString().includes(search.id) &&
      row.PC_Name.toLowerCase().includes(search.PC_Name.toLowerCase()) &&
      row.No.toString().includes(search.No) &&
      row.Type.toLowerCase().includes(search.Type.toLowerCase()) &&
      row.State.toLowerCase().includes(search.State.toLowerCase()) &&
      row.Winning_Candidate.toLowerCase().includes(search.Winning_Candidate.toLowerCase()) &&
      row.Party.toLowerCase().includes(search.Party.toLowerCase()) &&
      row.Electors.toString().includes(search.Electors) &&
      row.Votes.toString().includes(search.Votes) &&
      row.Turnout.toLowerCase().includes(search.Turnout.toLowerCase()) &&
      row.Margin.toString().includes(search.Margin) &&
      row.Margin_p.toLowerCase().includes(search.Margin_p.toLowerCase())
    );
  });

  // Bar chart data (Votes per Constituency)
  const barChartData = {
    labels: data.map(item => item.PC_Name),
    datasets: [
      {
        label: 'Votes',
        data: data.map(item => item.Votes),
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data (Party Distribution)
  const pieChartData = {
    labels: ['BJP', 'INC'],
    datasets: [
      {
        data: [
          data.filter(item => item.Party === 'Bharatiya Janta Party').length,
          data.filter(item => item.Party === 'Indian National Congress').length,
        ],
        backgroundColor: ['#FF5733', '#33B5FF'],
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',  // Labels will appear to the right of the chart
        labels: {
          boxWidth: 20, // Width of the colored box next to labels
        },
      },
    },
  };

  // Calculate useful information
  const totalElectors = data.reduce((acc, item) => acc + item.Electors, 0);
  const totalVotes = data.reduce((acc, item) => acc + item.Votes, 0);
  const totalTurnout = ((totalVotes / totalElectors) * 100).toFixed(2);



  const partyVotes = data.reduce((acc, curr) => {
    if (!acc[curr.Party]) {
      acc[curr.Party] = 0;
    }
    acc[curr.Party] += curr.Votes;
    return acc;
  }, {});

  const parties = Object.keys(partyVotes);
  const votes = parties.map(party => partyVotes[party]);

  const chartData = {
    labels: parties,
    datasets: [
      {
        label: 'Votes by Party',
        data: votes,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };
  // Total votes cast in all constituencies

  const partyStats = data.reduce((acc, curr) => {
    const party = curr.Party;
    const votes = curr.Votes;
    const seats = acc[party] ? acc[party].seats + 1 : 1;

    if (!acc[party]) {
      acc[party] = {
        seats: seats,
        votes: votes
      };
    } else {
      acc[party].votes += votes;
      acc[party].seats = seats;
    }
    return acc;
  }, {});

  // Now calculate Vote %
  const partyData = Object.keys(partyStats).map(party => {
    const partyTotalVotes = partyStats[party].votes;
    const partySeats = partyStats[party].seats;
    const votePercentage = ((partyTotalVotes / totalVotes) * 100).toFixed(2);

    return {
      Party: party,
      Seats: partySeats,
      Vote_Percentage: votePercentage
    };
  });

  const columns = [
    {
      Header: "Party",
      accessor: "Party"
    },
    {
      Header: "Seats",
      accessor: "Seats"
    },
    {
      Header: "Vote %",
      accessor: "Vote_Percentage"
    }
  ];






  return (
    <div className="m-5 shadow-2xl" >
      <h1 className="text-4xl font-bold mb-6 text-center">PC Election Results for Chhattisgarh(2024) </h1>

      {/* Loading state */}
      {loading && <p>Loading data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Render charts only when data is available */}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
            {/* Bar Chart: Votes per Constituency */}
            <div className=" w-full sm:w-96 flex-col items-center bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Votes per Constituency</h2>
              <Bar data={barChartData} options={{ responsive: true }} />
            </div>

            <div className="w-full sm:w-96 h-72 bg-white justify-center p-4 rounded-lg shadow-lg">
             
              <p className="text-lg">
                <strong>Total Electors: </strong>{totalElectors.toLocaleString()}
              </p>
              <p className="text-lg">
                <strong>Total Votes: </strong>{totalVotes.toLocaleString()}
              </p>
              <p className="text-lg">
                <strong>Overall Turnout: </strong>{totalTurnout}%
              </p>
              <p className="text-lg">
              <strong>Parliamentary Constituencies: </strong>{11}
              </p>

              <p className="text-lg">
              GENERAL: 6 | SC: 1 | ST: 4
              </p>
            </div>

            {/* Pie Chart: Party Distribution */}
            <div className="h-72 w-full sm:w-96 flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Party Distribution</h2>
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
          </div>


          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-2">

            {/* Chart Section */}
            <div className="flex-1 max-w-full sm:max-w-[500px] lg:max-w-lg w-full">
              <h3 className="text-xl font-semibold mb-2 text-center">Votes by Party</h3>
              <div className="bg-white p-4 shadow-md rounded-lg h-[250px] sm:h-[300px] lg:h-[350px] w-full">
                {/* Responsive Bar Chart */}
                <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </div>

            {/* Table Section */}
            <div className="w-full sm:w-[400px] lg:w-[450px] h-[200px] max-w-full mx-auto">
              <h2 className="text-xl font-semibold mb-4 text-center">Party Seats and Vote Percentage</h2>
              <div className="max-w-full h-full overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full text-left table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border-b px-4 py-2">Party</th>
                      <th className="border-b px-4 py-2">Seats</th>
                      <th className="border-b px-4 py-2">Vote %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partyData.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border-b px-4 py-2">{row.Party}</td>
                        <td className="border-b px-4 py-2">{row.Seats}</td>
                        <td className="border-b px-4 py-2">{row.Vote_Percentage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full sm:w-[400px] lg:w-[500px] mt-10 p-4">
              <img src="/Chhattisgarh.png" alt="Chhattisgarh" className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg" />
            </div>

          </div>





          {/* Render the data in a table */}
          <div className="overflow-x-auto mt-6">
            <div className="min-w-full">
              <table className="table-auto border-collapse border border-gray-300 w-full sm:max-w-none rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                    {/* Column Search Inputs */}
                    {["#", "PC Name", "No", "Type", "State", "Winning Candidate", "Party", "Electors", "Votes", "Turnout", "Margin", "Margin %"]
                      .filter(column => column !== "#")  // Filter out the "#" column
                      .map((column) => (
                        <th key={column} className="text-center border-gray-300 p-2 text-xs sm:text-base font-medium">
                          <div className="flex flex-col items-center">
                            <span>{column}</span>
                            <input
                              type="text"
                              className="mt-2 p-2 w-36 text-xs border rounded-md sm:text-base text-gray-700"
                              value={search[column.replace(" ", "_")] || ""}
                              onChange={(e) => handleSearchChange(e, column.replace(" ", "_"))}
                              placeholder={`Search ${column}`}
                            />
                          </div>
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map(user => (
                    <tr key={user.id} className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                      {/* <td className="py-3 border-b text-center border-gray-300 text-gray-800">{user.id}</td> */}
                      <td className="py-3 border-b text-center text-gray-800">{user.PC_Name}</td>
                      <td className="py-3 border-b text-center text-gray-800">{user.No}</td>
                      <td className="py-3 border-b text-center text-gray-800">{user.Type}</td>
                      <td className="py-3 border-b text-center text-gray-800">{user.State}</td>
                      <td className="py-3 border-b text-center text-gray-800">{user.Winning_Candidate}</td>
                      <td className="py-3 border-b text-center text-gray-800">{user.Party}</td>
                      <td className="py-3 border-b text-center text-gray-800">{user.Electors}</td>
                      <td className="py-3 border-b text-center text-gray-800">{user.Votes}</td>
                      <td className="py-3 border-b text-center text-gray-800">{user.Turnout}</td>
                      <td className="py-3 border-b text-center text-gray-800">{user.Margin}</td>
                      <td className="py-3 border-b text-center text-gray-800">{user.Margin_p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>



        </>
      )}
    </div>
  );
};

export default ChhattisGarh;
