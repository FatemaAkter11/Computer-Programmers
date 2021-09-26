import React from 'react';
import './Program.css';

const Program = (props) => {
    // console.log(props.program);
    //distructuring
    const { img, name, age, country, salary, achievement } = props.program || {};
    return (
        <div className="col-md-4 mb-4 ">
            <div className="card shadow-lg p-2 rounded  border border-primary" style={{ width: '18rem', height: 'h-100 d-inline-block' }}>
                <img src={img} className="mx-auto program-img" alt="..." />
                <div className="mt-2">
                    <h5 className="card-title"><span className="fw-bold">Name:</span> {name}</h5>
                    <p><span className="fw-bold">Age: </span>{age}</p>
                    <p><span className="fw-bold">Country:</span> {country}</p>
                    <p className="card-text"><span className="fw-bold">Salary:</span> ${salary}</p>
                    <p className="card-text"><small><span className="fw-bold">Achievement:</span>  {achievement}</small></p>
                    <a href="#"
                        className="btn w-75 mb-2 regular-btn fw-bold"><i class="fas fa-cart-plus"></i> Add to Cart</a>
                </div>
            </div>
        </div>
    );
};

export default Program;