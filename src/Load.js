import { Button } from "react-bootstrap";
const Load = ({ numArticles }) => {
	if (numArticles >= 4) {
		return (
			<div className="numSelect text-center mt-4">
				<Button
					className=""
					onClick={() => {
						console.log(numArticles);
						//setNumArticles(1);
					}}>
					25
				</Button>
				<Button
					className=""
					onClick={() => {
						//setNumArticles(2);
					}}>
					50
				</Button>
				<Button
					className=""
					onClick={() => {
						//setNumArticles(3);
					}}>
					75
				</Button>
				<Button
					className=""
					onClick={() => {
						//setNumArticles(4);
					}}>
					100
				</Button>
			</div>
		);
	} else if (numArticles >= 3) {
		return (
			<div className="numSelect text-center mt-4">
				<Button
					className=""
					onClick={() => {
						//setNumArticles(1);
					}}>
					25
				</Button>
				<Button
					className=""
					onClick={() => {
						//setNumArticles(2);
					}}>
					50
				</Button>
				<Button
					className=""
					onClick={() => {
						//setNumArticles(3);
					}}>
					75
				</Button>
			</div>
		);
	} else if (numArticles >= 2) {
		return (
			<div className="numSelect text-center mt-4">
				<Button
					className=""
					onClick={() => {
						//setNumArticles(1);
					}}>
					25
				</Button>
				<Button
					className=""
					onClick={() => {
						//setNumArticles(2);
					}}>
					50
				</Button>
			</div>
		);
	}
};

export default Load;
