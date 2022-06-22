import { Row, Container, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<Container className="d-flex flex-row py-3 footer">
			<Row className="justify-content-center">
				<Col className="text-center text-muted">
					<p className="mb-0">Copyright Nathan</p>
				</Col>
				<Col className="text-center text-muted">
					<p className="mb-0">Check out my insta</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
