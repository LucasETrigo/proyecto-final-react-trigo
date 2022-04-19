import React from "react";

function UserGreeting(props) {
    return (
        <div className="greetingDiv">
            <h1>{props.greeting}</h1>
        </div>
    );
}

export default UserGreeting;