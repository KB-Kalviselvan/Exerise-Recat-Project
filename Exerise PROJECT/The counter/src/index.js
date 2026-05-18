import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount +1);
    };
    
    const handleDecrement = () => {
       if (count > 0) {
        setCount(prevCount => prevCount -1);
       } 
     }; 
 

 return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
        <h1>The Counter</h1>
        <h2 style={{ fontSize: "40px" }}>{count}</h2>
        <button onClick={handleIncrement} className="btn">Increment</button>
        <button onClick={handleDecrement} className="btn">Decrement</button>

        <button onClick={() => setCount(0)} className="btn resetBtnStyle">Reset</button>
    </div>
 );
 }
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);

export default Counter;