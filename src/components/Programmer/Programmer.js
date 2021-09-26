import React, { useEffect, useState } from 'react';
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
                <div className="col-md-9">
                    <div className="row mx-auto">
                        {
                            programmers.map(program => <Program
                                key={program.key}
                                program={program}
                            ></Program>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <h2>This is total part</h2>
                </div>
            </div>
        </div>
    );
};

export default Programmer;