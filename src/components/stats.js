import React from "react";
import data from "../data.json";

const Mystats = () => {
    
    const status = data.options[0].stats;
    console.log(status.title)

    return (
        <div className="my-stats">
            <div className="test-1">

                    <h2>{status.title}</h2>
                    <p>{status.description}
                    </p>
            </div>
        </div>
    )
};

export default  Mystats;