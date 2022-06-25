import React from "react";
const st ={backgroundColor: "red",
color:"white",
fontSize:"40px"
}

function Esx({name, age, time}) {
	return (
		<div style={st}>
			<h1>
				Hello {name}
			</h1>
			<h1>you are welcome ,good {time}</h1>
			<h2>you are {age} years old</h2>
		</div>
	);
}

export default Esx;
