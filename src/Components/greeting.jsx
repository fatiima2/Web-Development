import react from "react";

const Greeting = ( {name} ) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Welcome to my React application.</p>
        </div>
    );
}

export default Greeting;