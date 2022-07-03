import { Card } from "react-bootstrap";
const Articles = ({ articles, numArticles }) => {
	const stock =
		"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
	return (
		<div className="articles d-flex justify-content-around flex-wrap">
			{articles.map((article, index) => {
				if (index < numArticles - 1) {
					if (article.content) {
						return (
							<Card key={index} className="cardd m-4">
								<Card.Img variant="top" src={article.image || stock} />
								<Card.Body className="d-flex">
									<Card.Title>{article.title}</Card.Title>
								</Card.Body>
								<Card.Body className="d-flex">
									<Card.Text>{article.content.slice(0, 253)}</Card.Text>
								</Card.Body>
								<Card.Body className="d-flex">
									<Card.Link
										href={article.url}
										target="_blank"
										className="btn btn-primary cardLink">
										Go to article
									</Card.Link>
								</Card.Body>
							</Card>
						);
					}
				}
			})}
		</div>
	);
};

export default Articles;
