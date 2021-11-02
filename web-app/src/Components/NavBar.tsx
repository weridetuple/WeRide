import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();
    const toggle = () => setIsOpen(!isOpen);

    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin,
        });

    return (
        <div className="nav-container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        tuple
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Profile" id="collasible-nav-dropdown">
                                {!isAuthenticated && (
                                    <NavDropdown.Item href="#action/logIn"
                                        onClick={loginWithRedirect}>
                                        Log In
                                    </NavDropdown.Item>
                                )}
                                {isAuthenticated && (
                                    <NavDropdown.Item href="#action/logOut"
                                        onClick={logoutWithRedirect}>
                                        Log Out
                                    </NavDropdown.Item>
                                )}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/help">Help</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;

