import React from 'react';
import Header from "./Header";
import App from "./App";

function Landing() {

    return (
        <div>
        <Header />
            <div>
            <h1 style={{position: "relative", width: "560px", margin: "30px auto 20px auto"}} >Welcome to the Note Keeping App</h1>
            <p style={{position: "relative", width: "280px", margin: "30px auto 20px auto"}} >Start organizing your notes today!</p>
            <App />
            </div>
        </div>
    );
};

export default Landing;
