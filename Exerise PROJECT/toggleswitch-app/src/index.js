import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function ReadMore() {
  // Step 1: Boolean state
  const [isExpanded, setIsExpanded] = useState(false);
// Step 2: Toggle function
  const toggleReadMore =() => {
    setIsExpanded(!isExpanded);
  };
  // Step 3: Text snippets
  const shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  const fullText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta debitis magnam asperiores odit possimus. Inventore debitis sit laborum iusto sapiente magni similique ad commodi? Labore, natus quisquam. Tenetur, inventore eligendi!"
return(
  <div>
    {/* Conditional Rendering with Ternary */}
    <p>{isExpanded ? fullText : shortText}</p>
    {/* Button changes text dynmically*/}

    <button onClick={toggleReadMore}
    >
      {isExpanded ? "Show Less" : "Show More"}
    </button>
  </div>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReadMore />
  </React.StrictMode>
);

export default ReadMore;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

