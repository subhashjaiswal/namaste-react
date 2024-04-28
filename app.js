const div = React.createElement("div", {id: "div1"}, 
[React.createElement("div", {id: "div2"},
[React.createElement("h1", {id:"h1"}, "Welcome to javascript programming"),
React.createElement("h1", {id:"h1"}, "Welcome to ReactJS programming"),

]),
React.createElement("div", {id: "div2"},
[React.createElement("h1", {id:"h1"}, "Welcome to javascript programming"),
React.createElement("h1", {id:"h1"}, "Welcome to ReactJS programming"),

])]);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(div);