import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Program from '../Program/Program';
import './Programmer.css';

const Programmer = () => {
    const [programmers, setProgrammers] = useState([]);
    //The state uses thr cart to keep the program
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./programmers.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, []);

    const handleAddProgram = (program) => {

        const newCart = [...cart, program]
        setCart(newCart)
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    {/* program data load */}
                    <div className="row ms-4">
                        {
                            programmers.map(program => <Program
                                key={program.key}
                                program={program}
                                handleAddProgram={handleAddProgram}
                            ></Program>)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    {/* cart calculation */}
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Programmer;