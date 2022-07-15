import { Alert } from "react-bootstrap";
const Error = ({ message }) => {
	return (
		<Alert variant="danger" className="mx-3 mt-3 text-center">
			{message}
		</Alert>
	);
};

export default Error;
