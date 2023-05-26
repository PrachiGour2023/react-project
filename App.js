/*
 * HMR - Hot Module Replacement
 * File Watcher Algorithm - C++
 * Bundling
 * Minify
 * Cleaning our code
 * Dev and Production build
 * Super fast build program
 * Images Optimization
 * Caching while developement
 * Compression
 * Compatible with older version of browser / polyfill
 * Enable HTTPS on developement
 * Port number
 * Consistent Hashing Algorithm
 * Zero Configuration
 * Transitive Dependecies
 *
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    key: 1,
    id: "head",
  },
  "Namaste React"
);
const div = React.createElement(
  "div",
  {
    key : 2,
    className: "container",
  },
  [
    React.createElement("p", { key: 1 }, "Paragraph Tag"),
    React.createElement("span", { key: 2 }, "Span Tag"),
  ]
);
console.log(div);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, div]);
