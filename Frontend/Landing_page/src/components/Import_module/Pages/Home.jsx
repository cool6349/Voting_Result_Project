import React from 'react'
import SelectionForm from '../SelectionForm'
import PieChart from './Report'
import DataTable from '../DataTable'
import SelectionForm2 from '../SelectionForm2'






const Home = () => {
    return (
        <div className='mr-9 ml-9'>


            <div className=" flex mb-6 mt-8 justify-between">

                <div className="w-72 bg-slate-600 flex-col  ">
                    <h1 className='pl-14'>2024 Summery Report</h1>
                    <div className='mt-10'>
                        <PieChart />
                    </div>
                </div>
                <div className="flex-col items-center justify-center">




                    <SelectionForm />


                    <SelectionForm2 />
                </div>
            </div>



            <div className="w-full mb-6 text-white bg-slate-500 h-72">Recent Assembly Election</div>


            <div className="w-full ">Distribution of votes of major parties Lok Sabha election 1952-2014

                <div>
                    <DataTable />
                </div>
            </div>


        </div>

    )
}

export default Home
