import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props || {};
    //array reducer
    const totalReducer = (preValue, currentValue) => preValue + currentValue.salary;
    const total = cart.reduce(totalReducer, 0).toFixed(2);
    const totalSalary = total;

    return (
        <div className="card w-75 mx-auto border border-info bg-body shadow mb-4 p-4 cart-container">
            <h2 className="text-success"><i className="fas fa-user"></i> Programmers Added:{cart.length} </h2>
            <h1>Total Salary Cost:$ {totalSalary}</h1>
            <div className="card w-50 mx-auto border border-info bg-body shadow mt-2">
                <ul>
                    {

                        cart.map(program => <li>{program.name}</li>)

                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;