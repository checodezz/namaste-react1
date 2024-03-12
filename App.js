import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('h1', { id: "heading" }, "Namaste React")

const root = ReactDOM.createRoot(document.getElementById("root"))

const jsxheading = (<h1 id='heading'>Namaste React using JSX</h1>)

root.render(jsxheading)