import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectionForm = () => {
    const navigate = useNavigate();

    // States to handle selected state and year
    const [selectedState, setSelectedState] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    // Sample state and year data
    const states = ["Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Lakshadweep",
        "Delhi",
        "Puducherry",
        "Ladakh",
        "Jammu and Kashmir"];
    const years = ['2024', '2019', '2015', '2010', '2005'];

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedState && selectedYear) {
            navigate(`/state/${selectedState}/year/${selectedYear}`);
        }



        else {
            alert('Please select both state and year');
        }
    };

    return (

        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-poppins text-center mb-6">Search Previous AC Result</h2>

            <form onSubmit={handleSubmit} className="space-y-4 ">
                {/* Select State */}
                <div className='flex gap-5 items-center align-middle'>
                    <div>
                        <label className="block text-gray-700">Select State</label>
                        <select
                            className="w-40 p-2 border border-gray-300 rounded mt-1"
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                        >
                            <option value="">-- Choose State --</option>
                            {states.map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>

                    {/* Select Year */}
                    <div>
                        <label className="block text-gray-700">Select Year</label>
                        <select
                            className="w-40 p-2 border border-gray-300 rounded mt-1"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            <option value="">-- Choose Year --</option>
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>


                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded  hover:bg-blue-600 transition"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SelectionForm;
