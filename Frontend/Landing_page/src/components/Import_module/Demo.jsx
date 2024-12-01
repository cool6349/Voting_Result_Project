import React, { useEffect, useState } from "react";
import { useTable } from 'react-table';

const Demo = () => {
  const [data, setData] = useState([]); // State to hold the fetched data

  // Fetch data from 'data.json' on component mount
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // Calculate total votes and seats for BJP and INC
  const totalVotes = data.reduce((acc, curr) => acc + curr.Votes, 0);  // Total votes cast in all constituencies

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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: partyData });

  return (
    <div>
      <h2>Party Seats and Vote Percentage</h2>
      {data.length > 0 ? (
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Demo;
