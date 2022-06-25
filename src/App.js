// import Nav from "./Nav";
// import ClassComponents from "./ClassComponents"
import Esx from "./Esx";

function App() {
	return (
		<div>
			{/* <Nav name="Zidane" />
      < ClassComponents/>
      <Nav name="Dan"/> */}
			<Esx name="Daniel" time="afternoon" age={6} />
			<Esx name="Zidane" time="evening"  />
			<Esx name="Promise" time="Morning" />
			<Esx name="Daniel" time="afternoon" />
			<Esx name="Daniel" time="afternoon" />
			<Esx name="Henry" time="afternoon" />
		</div>
	);
}

export default App;
