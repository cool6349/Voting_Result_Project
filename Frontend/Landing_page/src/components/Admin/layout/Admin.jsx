import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminLogin = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <header className="bg-primary text-white py-3 ">
        <h1 className="text-center mb-0">WELCOME ADMIN</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container  ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Panchayat
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sarpanch
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Samiti Sabhya/Member
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="card p-4" style={{ width: "400px" }}>
          <h3 className="text-center text-primary mb-4">Login to Admin panel</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username or Email
              </label>
              <input type="text" className="form-control" id="username" placeholder="Enter your username or email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>
            <div className="text-center">
              <a href="#" className="d-block mb-3 text-decoration-none">
                Forgot your password?
              </a>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
