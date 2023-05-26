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

// JSX Expression (React Element)
const para = <p>Namaste React</p>;

// React Component
const Heading2 = () => (
  <h2 className="heading" key="6">
    JSX Syntex
  </h2>
);

// console.log(heading2)
function HeaderComponent() {
  return (
    <div>
      <h1>Helooo Compo</h1>
      {Heading2()}
      {para}
      {(a=5,console.log(a))}
    </div>
  );
}

// console.log(HeaderComponent());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
