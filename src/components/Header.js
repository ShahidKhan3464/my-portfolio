import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '..//Style/Navbar.css'

const Header = () => {

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#" className='logo'>Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#projects" className='link'>Projects</Nav.Link>
                        <Nav.Link href="#about" className='link'>About</Nav.Link>
                        <Nav.Link href="#contact" className='link'>Contact</Nav.Link>
                        <div className='icons'>
                            <Nav.Link href="https://github.com/ShahidKhan3464" target="_blank" className='social-link'><BsGithub /></Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/shahidkhan34" target="_blank" className='social-link'><BsLinkedin /></Nav.Link>
                            <Nav.Link href="https://www.facebook.com" target="_blank" className='social-link'><FaFacebook /></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header