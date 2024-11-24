import React from "react"
import Navbar from "./components/Navbar"
import StateYearPage from './components/Import_module/StateYearPage'
import PanjabTable from "./components/Import_module/PanjabTable";
import AsamTable from "./components/Import_module/AsamTable";
import Layout from './components/Import_module/Layout';
import Home from './components/Import_module/Pages/Home';
import Summary from './components/Import_module/Pages/Summary';
import Political from './components/Import_module/Pages/Political';
import Election from './components/Import_module/Pages/Election';
import About from './components/Import_module/Pages/About';
import Contact from './components/Import_module/Pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {


  return (
    <div>

      {/* <Navbar /> */}


      <Router>

        <Layout>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/political" element={<Political />} />
            <Route path="/election" element={<Election />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/state/:odisha/year/:2024" element={<StateYearPage />} />
            <Route path="/state/punjab/year/2024" element={<PanjabTable />} />
            <Route path="/state/assam/year/2024" element={<AsamTable />} />
          </Routes>
        </Layout>

      </Router>





    </div>

  )
};

export default App
