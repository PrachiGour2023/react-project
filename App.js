/*
* HMR - Hot Module Reloading 
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
*/

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {
    id: 'head'
}, "Namaste React");
const div = React.createElement("div", { 
    className: "container"
},[ 
React.createElement("p", {}, "Paragraph Tag"),
React.createElement("span", {}, "Span Tag")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, div]);