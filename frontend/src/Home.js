import React, { useEffect, useState } from 'react'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from "./Images/Default_A_gold_trophy_with_gleaming_curves_set_against_a_backd_2.jpg"
import img2 from "./Images/Default_A_gold_trophy_with_gleaming_curves_set_against_a_backd_2.jpg"
import img3 from "./Images/Default_A_gold_trophy_with_gleaming_curves_set_against_a_backd_2.jpg"
import img4 from "./Images/Default_A_gold_trophy_with_gleaming_curves_set_against_a_backd_2.jpg"
import img5 from "./Images/Default_A_gold_trophy_with_gleaming_curves_set_against_a_backd_2.jpg"
import img6 from "./Images/Default_A_gold_trophy_with_gleaming_curves_set_against_a_backd_2.jpg"
import img7 from "./Images/Default_A_gold_trophy_with_gleaming_curves_set_against_a_backd_2.jpg"
import axios from 'axios'

axios.defaults.withCredentials = true;


function Home() {
  

    useEffect(() => {
        const copyElement = document.querySelector(".logos-slide");
        if (copyElement) {
            const copy = copyElement.cloneNode(true);
            document.querySelector(".logos").appendChild(copy);
        }
    }, []);
    const [auth, setAuth] = useState(false);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:8081')  //change  axios.get('http://localhost:8081',values) 
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true)

                    //    navigate('/login');
                } else {
                    setAuth(false)
                }
            })
            .catch(err => console.log(err));
    }, [])
    const handleDelete = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                window.location.reload(true);
            }).catch(err => console.log(err));
    }

    return (
        <div>
            {
                auth ?
                    <div className='body'>
                        <Navbar expand="lg" className="custom-navbar">
                            <Container>
                                <Navbar.Brand style={{ fontSize: '28px' }}>TNP NIT Uttarakhand</Navbar.Brand>
                                <Navbar.Toggle id="custom-toggler" aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link className="custom-link" href="#">Home</Nav.Link>
                                        <Nav.Link className="custom-link" href="https://www.nituk.ac.in/uploads/topics/16902559802305.pdf">Brochure</Nav.Link>
                                        <Nav.Link className="custom-link" href="https://www.nituk.ac.in/career-counselling-and-placement/placement-process">Placement Process</Nav.Link>
                                        <NavDropdown title="Placement Statistics" id="basic-nav-dropdown" className="custom-dropdown">
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/placement-statistics">B.Tech Placement Statistics</NavDropdown.Item>
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/placement-statistics">
                                                M.Tech Placement Statistics
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/placement-statistics">
                                                Phd Placement Statistics
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Our Team" id="basic-nav-dropdown" className="custom-dropdown">
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/c2p-team">Head</NavDropdown.Item>
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/c2p-team">
                                                department coordinator
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/c2p-team">
                                                Student coordinator
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Profile" id="basic-nav-dropdown" className="custom-dropdown">
                                            <NavDropdown.Item className="custom-dropdown-link" href="/studentHome">Profile</NavDropdown.Item>
                                            <NavDropdown.Item className="custom-dropdown-link" onClick={handleDelete}>
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>



                        <div class='homepage'>
                            <div className='Overview'>
                                <div className='Overview1' >A one stop portal for Placements & Internships</div>

                                <div className='Overview2'>
                                    <p>
                                        Welcome to the recruitment website For NIT Uttarakhand.
                                        NIT is India's foremost industrial leadership development institution.
                                        Our graduates are a combination of rigorous thinking, hardwork and
                                        fundamental stronghold. They are nurtured by the institute to strive for
                                        excellence and deliver impact in their field of work. Let us begin...


                                    </p>
                                </div>
                            </div>
                            <div className="announcment">
                                <h2 className='h2_class'>
                                    <span >Announcements </span>
                                </h2>

                                <div id="newsticker-demo" style={{ overflow: "hidden" }} >
                                    <ul className='newsticker-demo-ul' style={{ overflow: "hidden" }}>
                                        <li> Notice for extension of last date against the Advertisement No: 02/2024, 03/2024, 04/2024 and 05/2024</li>
                                        <hr></hr>
                                        <li>Welcome to the recruitment website For NIT Uttarakhand.</li>
                                        <hr></hr>
                                        <li>Information Brochure & application form for Ph.D admission Even semester 2024</li>
                                        <hr></hr>
                                        <li>New applicant shall need to Register first with a valid email address..</li>
                                        <hr></hr>
                                        <li> Notice inviting expression of interest for transfer of technology for integrated bidirectional DC-DC converter </li>
                                        <hr></hr>
                                        <li> Notice for extension of last date against the Advertisement</li>
                                        <hr></hr>
                                        <li> Fees Structure of UG & PG Programme (1st Year )</li>
                                        <hr></hr>
                                        <li> List of Eligible/Not Eligible Candidates for Ph.D admission written test (Even Semester-2024)</li>
                                        <hr></hr>
                                        <li>Syllabus of written test for the post of Assistant Professor (Grade-II) </li>
                                    </ul>
                                </div>
                            </div>
                        </div>




                        <div className="info">
                            <h3>Company Visited</h3>

                        </div>





                        <div className='logos'>
                            <div className='logos-slide'>
                                <img src={img1} alt="img1" />
                                </div><div className='logos-slide'>
                                <img src={img2} alt="img2" />
                                </div><div>
                                <img src={img3} alt="img3" />
                                </div><div>
                                <img src={img4} alt="img4" />
                                </div><div>
                                <img src={img5} alt="img5" />
                                </div><div>
                                <img src={img6} alt="img6" />
                                </div><div>
                                <img src={img7} alt="img7" />


                            </div>
                        </div>

                        <div>
                            <footer style={{ backgroundColor: "rgb(29, 29, 100)", color: "white" }} className="page-footer font-small blue pt-4">
                                <div className="container-fluid text-center text-md-left">
                                    <div className="row">
                                        <div className="col-md-6 mt-md-0 mt-3">
                                            <h5 className="text-uppercase">Contact us</h5>
                                            <p>National Institute of Technology,</p>
                                            <p>Uttarakhand</p>
                                            <p> Srinagar, Pauri (Garhwal)-246174</p>
                                            <p>1346-257400 </p>
                                            <p>nituttarakhand@nituk.ac.in</p>
                                            <p>www.nituk.ac.in</p>
                                            <p></p>
                                        </div>

                                        <hr className="clearfix w-100 d-md-none pb-0" />

                                        <div className="col-md-3 mb-md-0 mb-3">
                                            <h5 className="text-uppercase">Important Links</h5>
                                            <ul className="list-unstyled">
                                                <li><a href="#!">Email Poilcy</a></li>
                                                <li><a href="#!">Administration Form</a></li>
                                                <li><a href="#!">Academics Realted forms</a></li>
                                                <li><a href="#!">Office Orders</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3 mb-md-0 mb-3">
                                            <h5 className="text-uppercase">Downlod</h5>
                                            <ul className="list-unstyled">
                                                <li><a href="#!">Recruitment</a></li>
                                                <li><a href="#!">Newsletter</a></li>
                                                <li><a href="#!">Annual report</a></li>
                                                <li><a href="#!">FC Meetings</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className="footer-copyright text-center py-3">© Copyright:
                                    <a href="https://mdbootstrap.com/"> NIT Uttarakhand</a>
                                </div>

                            </footer>
                        </div>

                    </div>
                    :
                    <div className='body'>
                        <Navbar expand="lg" className="custom-navbar">
                            <Container>
                                <Navbar.Brand style={{ fontSize: '28px' }}>TNP NIT Uttarakhand</Navbar.Brand>
                                <Navbar.Toggle id="custom-toggler" aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link className="custom-link" href="#">Home</Nav.Link>
                                        <Nav.Link className="custom-link" href="https://www.nituk.ac.in/uploads/topics/16902559802305.pdf">Brochure</Nav.Link>
                                        <Nav.Link className="custom-link" href="https://www.nituk.ac.in/career-counselling-and-placement/placement-process">Placement Process</Nav.Link>
                                        <NavDropdown title="Placement Statistics" id="basic-nav-dropdown" className="custom-dropdown">
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/placement-statistics">B.Tech Placement Statistics</NavDropdown.Item>
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/placement-statistics">
                                                M.Tech Placement Statistics
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/placement-statistics">
                                                Phd Placement Statistics
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Our Team" id="basic-nav-dropdown" className="custom-dropdown">
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/c2p-team">Head</NavDropdown.Item>
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/c2p-team">
                                                department coordinator
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item className="custom-dropdown-link" href="https://www.nituk.ac.in/career-counselling-and-placement/c2p-team">
                                                Student coordinator
                                            </NavDropdown.Item>
                                        </NavDropdown>

                                        <Nav.Link className="custom-link" href="/login">Login</Nav.Link>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>



                        <div class='homepage'>
                            <div className='Overview'>
                                <div className='Overview1' >A one stop portal for Placements & Internships</div>

                                <div className='Overview2'>
                                    <p>
                                        Welcome to the recruitment website For NIT Uttarakhand.
                                        NIT is India's foremost industrial leadership development institution.
                                        Our graduates are a combination of rigorous thinking, hardwork and
                                        fundamental stronghold. They are nurtured by the institute to strive for
                                        excellence and deliver impact in their field of work. Let us begin...
                                        

                                    </p>
                                </div>
                            </div>
                            <div className="announcment">
                                <h2 className='h2_class'>
                                    <span >Announcements </span>
                                </h2>

                                <div id="newsticker-demo" style={{ overflow: "hidden" }} >
                                    <ul className='newsticker-demo-ul' style={{ overflow: "hidden" }}>
                                        <li> Notice for extension of last date against the Advertisement No: 02/2024, 03/2024, 04/2024 and 05/2024</li>
                                        <hr></hr>
                                        <li>Welcome to the recruitment website For NIT Uttarakhand.</li>
                                        <hr></hr>
                                        <li>Information Brochure & application form for Ph.D admission Even semester 2024</li>
                                        <hr></hr>
                                        <li>New applicant shall need to Register first with a valid email address..</li>
                                        <hr></hr>
                                        <li> Notice inviting expression of interest for transfer of technology for integrated bidirectional DC-DC converter </li>
                                        <hr></hr>
                                        <li> Notice for extension of last date against the Advertisement</li>
                                        <hr></hr>
                                        <li> Fees Structure of UG & PG Programme (1st Year )</li>
                                        <hr></hr>
                                        <li> List of Eligible/Not Eligible Candidates for Ph.D admission written test (Even Semester-2024)</li>
                                        <hr></hr>
                                        <li>Syllabus of written test for the post of Assistant Professor (Grade-II) </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="info">
                            <h3>Company Visited</h3>

                        </div>


                        <div className='logos'>
                            <div className='logos-slide'>
                                <img src={img1} alt="img1" />
                                <img src={img2} alt="img2" />
                                <img src={img3} alt="img3" />
                                <img src={img4} alt="img4" />
                                <img src={img5} alt="img5" />
                                <img src={img6} alt="img6" />
                                <img src={img7} alt="img7" />

                            </div>
                        </div>

                        <div>
                            <footer style={{ backgroundColor: "rgb(29, 29, 100)", color: "white" }} className="page-footer font-small blue pt-4">
                                <div className="container-fluid text-center text-md-left">
                                    <div className="row">
                                        <div className="col-md-6 mt-md-0 mt-3">
                                            <h5 className="text-uppercase">Contact us</h5>
                                            <p></p>
                                        </div>

                                        <hr className="clearfix w-100 d-md-none pb-0" />

                                        <div className="col-md-3 mb-md-0 mb-3">
                                            <h5 className="text-uppercase">Links</h5>
                                            <ul className="list-unstyled">
                                                <li><a href="#!">Email Policy</a></li>
                                                <li><a href="#!">Administration Form</a></li>
                                                <li><a href="#!">Academics Realted forms</a></li>
                                                <li><a href="#!">Office Orders</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3 mb-md-0 mb-3">
                                            <h5 className="text-uppercase">Links</h5>
                                            <ul className="list-unstyled">
                                                <li><a href="#!">Link 1</a></li>
                                                <li><a href="#!">Link 2</a></li>
                                                <li><a href="#!">Link 3</a></li>
                                                <li><a href="#!">Link 4</a></li>
                                            </ul>
                                        </div>



                                    </div>
                                </div>

                                <div className="footer-copyright text-center py-3">© Copyright:
                                    <a href="https://mdbootstrap.com/"> NIT Uttarakhand</a>
                                </div>

                            </footer>
                        </div>

                    </div>
            }

        </div>

    )
}

export default Home