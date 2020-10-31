import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faFacebook,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const ContactForm = () => {
	return (
		<div id="contact">
			<h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
			<Jumbotron className="contact-jumbotron">
				<Row>
					<Col className="d-flex justify-content-center flex-wrap">
						<div className="m-2">
							<a
								href="mailto:heyitsabinash25@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faEnvelope} size="3x" />
							</a>
						</div>
						<div className="m-2">
							<a
								href="https://www.linkedin.com/in/Abinash-Sinha/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faLinkedin} size="3x" />
							</a>
						</div>

						<div className="m-2">
							<a
								href="https://github.com/Abinash-Sinha"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faGithub} size="3x" />
							</a>
						</div>
						<div className="m-2">
							<a
								href="https://www.facebook.com/Abinash-Sinha"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faFacebook} size="3x" />
							</a>
						</div>
						<div className="m-2">
							<a
								href="https://instagram.com/Abinash-Sinha"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faInstagram} size="3x" />
							</a>
						</div>
					</Col>
				</Row>
			</Jumbotron>
		</div>
	);
};

export default ContactForm;
