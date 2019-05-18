import React, { Component } from 'react';
// import { Route, Switch, withRouter } from "react-router";
import { Container, Row, Col } from 'react-bootstrap';
import "./LandingPages.sass";

// impoert pages
import NavBar from "../../components/Navbar/Navbar";

import Mockup from "../../assets/img/Mockup.png";

class LandingPages extends Component{
    render(){
        return(
            <div>
                <NavBar />
                <div className="apps">
                    <Container fluid className="background-image outer-center">
                        <div className="container-text middle-center">
                            <div className="inner-center text-style">
                                <h1>Yes!<br/> We have solution<br/> for this problem!</h1>
                                <a className="button-green" href="#about">Learn More</a>
                            </div>
                        </div>
                    </Container>
                    <Container fluid className="outer-center" id="about">
                        <Row>
                            <Col md={8} className="middle-center">
                                <div className="inner-center text-style font-black">
                                    <h2>About Us</h2>
                                    <span className="greenline"></span>
                                    <p>Garbage is a big problem for big cities, specifically Jakarta. According to CNBC Indonesia news, the volume of garbage in Jabodetabek has increased by 17 tons within 12 hours. Until now, the right solution has not been found to overcome this problem. In addition, we also hear a lot of news about animals that are victims of inorganic rubbish that is disposed of carelessly.<br/><br/>
                                    We are here to collaborate with the community in collecting and sorting waste using AI technology and Smartphones. People who want to orderly dispose of trash in their place need to be given appreciation. Through the Apps and Technology that we build, we will give points to every waste specifically inorganic waste that is disposed of in our place. We will hand over the inorganic waste to the recycling industry to be processed according to applicable procedures so as not to pollute our soil, water and air. <br /> <br/>
                                        UPAH is a digital start-up company engaged in the environment, which has a main focus on collecting inorganic waste using AI technology. At present, UPAH is designing applications that are user friendly and the hardware used for implementing the AI system. The plan, the prototype will be tested at the beginning of July 2019.</p>
                                </div>
                            </Col>
                            <Col md={4} className="middle-center">
                                <div className="inner-center text-style">
                                    <img
                                        alt=""
                                        src={Mockup}
                                        width="250px"
                                        className="d-inline-block align-top"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default LandingPages;