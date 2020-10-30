import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/Profile2.webp'
import "./about.style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import Resume from "../../assets/documents/Resume.pdf"
const About = () => {
    return (
        <div id='about'>
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center"   >
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" alt="profile" src={Profile}  fluid />
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            Hi there! I am <strong>&nbsp;Abinash Sinha</strong>
                            <br />I am a Python Developer with a passion for Computer Vision and Web Development.
                            <br />
                            I completed my Engineering with specialization in 'Computer Science and Engineering'.
                            <br />
                            Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                            <br />
                            Along with that, I also work at Praadis Technologies Inc. as a professional Python Developer. 
                            <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                            <br /> <br />
                            <Col className="d-flex justify-content-left flex-wrap">
                            <div>
                                <a href="#contact">
                                    <FontAwesomeIcon icon={faPhoneSquareAlt} size="3x"/>
                                </a>
                            </div>
                            <div>
                                <a href={Resume} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFilePdf} size="3x"/>
                                </a>
                            </div>
                            <div >
                                <a href="https://github.com/Abinash-Sinha" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                                </a>
                            </div>
                            <div >
                                <a href="https://facebook.com/Abinash-Sinha" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="3x"/>
                                </a>
                            </div>
                            <div >
                                <a href="https://instagram.com/Abinash-Sinha" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="3x"/>
                                </a>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
