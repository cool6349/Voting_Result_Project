import React from 'react'
import SelectionForm from '../SelectionForm'
import DataTable from '../DataTable'





const Home = () => {
    return (
        <div >
            <div className=" flex justify-between mb-6">

                <div className="w-52 bg-slate-600 ">2024 Summery Report</div>
                <div className="flex items-center justify-center">
                    <SelectionForm />
                </div>
            </div>

            <div className="w-full mb-6 text-white bg-slate-500 h-72">Recent Assembly Election</div>


            <div className="w-full text-white bg-zinc-700 h-80">Distribution of votes of major parties Lok Sabha election 1952-2014

                <div>
                    <DataTable />
                </div>
            </div>


        </div>

    )
}

export default Home
