// // TH1: Pure JS
// let elRoot = document.querySelector("#root");
// let h1 = document.createElement("h1");
// h1.innerHTML = `Hello React`
// elRoot.appendChild(h1);

// TH2: Using React without JSX
const el = React.createElement("h1", {className: "title"}, "Hello React");

console.log(el);

// Display on FrontEnd
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(el);