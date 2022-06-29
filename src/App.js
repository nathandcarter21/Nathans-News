import PageNavbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body";

function App() {
	return (
		<div className="App">
			<PageNavbar />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
