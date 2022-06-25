import React from "react";

function Nav(props) {
	console.log(props);
	return (
		<>
			<h1>hello {props.name}</h1>
			<p>this is fun </p>
			<h3>react</h3>
		</>
	);
}
export default Nav;
