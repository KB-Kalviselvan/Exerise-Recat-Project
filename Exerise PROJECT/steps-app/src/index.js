import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income"
]

export default function App() {
    const [step, setStep] = useState(1);
    function handleprevious () {
      if(step > 1)
      setStep(step -1);

    }

     function handlepnext () {
      if (step < 3)
      setStep(step +1);
    }
    return (
      <div className="steps">
        <div className="number">
          <div className={`${step >=1 ? "active" : ""}`}>1</div>
          <div className={`${step >=2 ? "active" : ""}`}>2</div>
          <div className={`${step >=3 ? "active" : ""}`}>3</div>
        </div>
        <p className="messages"> step {step} : {messages[step- 1]}</p>
        <div className="button">
           <button style={{backgroundColor : "#7950f2", color: "#fff" }}
           onClick={handleprevious}>previous</button>
            <button style={{backgroundColor : "#7950f2", color: "#fff" }}
           onClick={handlepnext}>NEXT</button>
        </div>
      </div>
    );
}

