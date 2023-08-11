import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Test() {
  const [rate, setRate] = useState(0);
  return (
    <>
      <StarRating color="blue" maxRating={10} onSetRating={setRate} />
      <p>This movie has {rate} ratings</p>
    </>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <StarRating
//       maxRating={5}
//       messages={["terrible", "average", "good", "better", "excellent"]}
//     />
//     <StarRating color="#AAEEBA" size={30} />
//     <Test />
//   </React.StrictMode>
// );
