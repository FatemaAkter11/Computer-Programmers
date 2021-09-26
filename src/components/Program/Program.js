import React from 'react';
import './Program.css';

const Program = (props) => {
    // console.log(props.program);
    //distructuring
    const { img, name, age, country, salary, achievement } = props.program || {};
    return (
        <div className="col-md-4 mb-4 ">
            <div className="card shadow-lg p-2 rounded" style={{ width: '18rem', height: 'h-100 d-inline-block' }}>
                <img src={img} className="mx-auto program-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6>Age: {age}</h6>
                    <h6>Country: {country}</h6>
                    <p className="card-text">Salary: {salary}</p>
                    <p className="card-text"><small>Achievement:  {achievement}</small></p>
                    <a href="#"
                        className="btn w-75 regular-btn fw-bold"><i class="fas fa-cart-plus"></i> Add to Cart</a>
                </div>
            </div>
        </div>
    );
};

export default Program;