import React from 'react';
import './Header.css';

const Header = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#"><i>Computer Programmers</i></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Categories</a>
                            </li>
                        </ul>
                        <form className="d-flex flex-fill mx-5">
                            <input className="form-control me-2" type="search" placeholder="Find Computer Programmers" aria-label="Search" />
                            <button className="btn btn-warning" type="submit" >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="header-bg shadow-lg p-3 mb-5 rounded">
                <h1 className="text-success">Make An Greatest Computer Programmers Team</h1>
                <p className="text-success fw-bold">Programmers are considered new rock stars. Below, we have mentioned some world-class coders <br />  who have changed the world with their creative minds and influenced people to become a better programmer.</p>
                <h1 className="text-success">Total Budget: <span className="fw-bold">500 Million</span></h1>
            </div>
        </div>
    );
};

export default Header;