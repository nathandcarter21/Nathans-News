import { Button } from "react-bootstrap";
const Load = ({ numArticles, addNumArticles, totalArticles }) => {
	if (numArticles < totalArticles)
		return (
			<div className="load-more my-4 text-center">
				<Button onClick={addNumArticles}>Load More</Button>
			</div>
		);
};

export default Load;
