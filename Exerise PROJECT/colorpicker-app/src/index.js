import React, { useState } from "react";

// ColorPicker முதல்ல define பண்ணு
function ColorPicker() {
  const [color, setColor] = useState("");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>🎨 Color Picker</h2>
      <input
        type="text"
        placeholder="Type a color (e.g., red, blue, #00ff00)"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "15px",
          width: "250px",
        }}
      />
      <div
        style={{
          width: "150px",
          height: "150px",
          border: "2px solid black",
          borderRadius: "8px",
          backgroundColor: color || "white",
          transition: "background-color 0.3s ease",
        }}
      ></div>
    </div>
  );
}

function App() {
  return (
    <div>
      <ColorPicker />
    </div>
  );
}

export default App; // ✅ App-ஐ export பண்ணு