import React, { useEffect, useState } from 'react';
import '../App.css';
import { Modal, Button } from 'react-bootstrap';
import { BsQuestionCircle } from 'react-icons/bs';

export default function Responses(props) {
	const [allResponses, setAllResponses] = useState([]);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const responsesCardTitle = 'Responses';
	const surveyName = 'NPS Survey';

	useEffect(() => {
		setAllResponses(props.filteredData);
	}, [props.filteredData]);

	return (
		<div className="responses-wrapper">
			<div className="card-header-wrapper">
				<div className="cards-header" onClick={handleShow}>
					<div>{responsesCardTitle}</div>
					<div className="question-icon">
						<BsQuestionCircle />
					</div>
				</div>
				<Modal show={show} onHide={handleClose} centered>
					<Modal.Header closeButton>
						<Modal.Title>{responsesCardTitle}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>
							Here are listed all the responses from "{surveyName}" from the
							previous six (6) months in date order showing the most recent
							responses on the top. Ongoing month's responses are not shown.
						</p>
						<p>
							The responses list will be updated automatically as soon as the
							calendar month has changed at midnight.
						</p>
						<p>
							If you have just recently started gathering data via "{surveyName}
							", you might see less than six months' responses.
						</p>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				<div className="card-header-dates">Jun 2022-Aug 2022</div>
			</div>
			<div className="responses-list">
				{allResponses.map((answer, id) => {
					return (
						<div className="response" key={id}>
							<div className="response-colour-code-wrapper">
								<div
									className={`response-colour-code ${
										answer.score >= 9 ? 'promoters-line' : ''
									} ${answer.score <= 6 ? 'detractors-line' : ''} ${
										answer.score > 6 && answer.score < 9 ? 'passives-line' : ''
									}`}
								></div>
								<div
									className={`response-score ${
										answer.score >= 9 ? 'promoters' : ''
									} ${answer.score <= 6 ? 'detractors' : ''} ${
										answer.score > 6 && answer.score < 9 ? 'passives' : ''
									}`}
								>
									{answer.score}
								</div>
							</div>
							<div className="response-date-and-comment-wrapper">
								<span className="response-date">
									{answer.date.yyyy}/{answer.date.mm}/{answer.date.dd}
								</span>
								<span className="response-comment">{answer.comment}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
