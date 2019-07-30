import React from "react"

const Trend = ({trend, className}) => (
    <div className={`square ${className}`}>
        <h5 className="card-title">{trend.keyword}</h5>
    </div>
);

export default Trend;
