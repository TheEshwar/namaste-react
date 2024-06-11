const heading = React.createElement("div", { id: "div1" }, [
	React.createElement("div", { id: "div2" }, [
		React.createElement("h1", {}, "This is H1 under Div1"),
		React.createElement("h1", {}, "This is H1 under Div1"),
	]),
	React.createElement("div", { id: "div2" }, [
		React.createElement("h1", {}, "This is H1 under Div1"),
		React.createElement("h1", {}, "This is H1 under Div1"),
	]),
    React.createElement("hr")
]);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading);
