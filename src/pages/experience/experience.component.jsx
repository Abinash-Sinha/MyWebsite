import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Prudent from "../../assets/img/experience/Prudent.webp";
import Praadis from "../../assets/img/experience/Praadis.webp";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
	return (
		<div id="experience">
			<h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
			<Jumbotron className="jumbo-style">
				<Container>
					<Tilt options={{ max: 25 }}>
						<Card>
							<Card.Header
								as="h5"
								className="d-flex justify-content-center flex-wrap"
							>
								<Card.Img
									variant="top"
									className="img-resize"
									src={Prudent}
									alt="Prudent logo"
								/>
							</Card.Header>
							<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">
										Software Engineer
									</Card.Title>
								</div>
								<div>
									<Card.Text className="text-center style">
										<strong className="body-title-style ">
											Artificial Intelligence
										</strong>
										<br />
										<strong>Technology:</strong>Python,
										OpenCV
										<br />
										<strong> Description </strong>
										<ul className="text-left">
											<li>
												<strong>
													Developed &amp; enhanced
												</strong>{" "}
												multiple desktop applications in
												computer vision an IoT.
											</li>
											<li>
												<strong>Developed</strong> A
												spark detection system for
												Indian Railway.
											</li>
											<li>
												<strong>Developed</strong>{" "}
												Vibration messuring application
												using multiple sensors and a
												destop dashboard for it.
											</li>

											{/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
										</ul>
									</Card.Text>
								</div>
							</Card.Body>
						</Card>
					</Tilt>
					<br />
					<Tilt options={{ max: 25 }}>
						<Card>
							<Card.Header
								as="h5"
								className="d-flex justify-content-center flex-wrap"
							>
								<Card.Img
									variant="top"
									className="img-resize"
									src={Praadis}
									alt="Prudent logo"
								/>
							</Card.Header>
							<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">
										Software Engineer
									</Card.Title>
								</div>
								<div>
									<Card.Text className="text-center style">
										<strong className="body-title-style ">
											Artificial Intelligence and Backend
										</strong>
										<br />
										<strong>Technology:</strong> Python,
										Apache Solr
										<br />
										<strong> Description </strong>
										<ul className="text-left">
											<li>
												<strong>
													Developed &amp; enhanced
												</strong>{" "}
												multiple web applications in AI
												and other tools
											</li>
											<li>
												<strong>Developed</strong> A
												Chatbot using python
											</li>
											<li>
												<strong>Developed</strong>{" "}
												Enterprise search engine using
												Apache Solr and API using
												Python.
											</li>

											{/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
										</ul>
									</Card.Text>
								</div>
							</Card.Body>
						</Card>
					</Tilt>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Experience;
