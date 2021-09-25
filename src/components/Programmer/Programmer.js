import React, { useEffect, useState } from 'react';
import './Programmer.css';

const Programmer = () => {
    const [programmer, setProgrammer] = useState([]);

    useEffect(() => {
        fetch("./programmers.JSON")
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <h1>This is a Programmer</h1>
                </div>
                <div className="col-md-3">
                    <h2>This is total part</h2>
                </div>
            </div>
        </div>
    );
};

export default Programmer;