import React from "react";
import data from "../data.json";

const Story = () => {

    const story = data.options[0].Story;

    return (
        <div className="my-story">
            <div className="test-1">

                    <h2>{story.title}</h2>
                    <p>{story.description}
                    </p>
            </div>
        </div>
    )
};

export default  Story;