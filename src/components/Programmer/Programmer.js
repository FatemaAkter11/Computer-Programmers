import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Program from '../Program/Program';
import './Programmer.css';

const Programmer = () => {
    const [programmers, setProgrammers] = useState([]);

    useEffect(() => {
        fetch('./programmers.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row ms-4">
                        {
                            programmers.map(program => <Program
                                key={program.key}
                                program={program}
                            ></Program>)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Programmer;