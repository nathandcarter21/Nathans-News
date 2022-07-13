import { Alert } from "react-bootstrap";
const Error = () => {
	return (
		<Alert variant="danger" className="mx-3 mt-3 text-center">
			Sorry! Something went wrong! This is likely due to too many requests to
			the server. Please come back later!
		</Alert>
	);
};

export default Error;
