import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props || {};
    //array reduce
    const totalReducer = (preValue, currentValue) => preValue + currentValue.salary;
    const total = cart.reduce(totalReducer, 0).toFixed(2);
    const totalSalary = total;
    // console.log(cart);
    return (
        <div>
            <div className="card w-75 mx-auto border border-info bg-body shadow mb-4 p-4 cart-container">
                <h1 className="text-success fw-bold"><i className="fas fa-user"></i> Programmers Added: {cart.length} </h1>
                <h2>Total Salary Cost:$ {totalSalary}</h2>
                <div className="card w-75 mx-auto border border-info bg-body shadow mt-2">
                    <h6 className="fw-bold text-dark text-center">Computer Programmer List: </h6>
                    <ul>
                        {

                            cart.map(program => <li>
                                {program.name}
                            </li>)

                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cart;