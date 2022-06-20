import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
