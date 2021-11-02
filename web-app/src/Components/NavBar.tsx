import { useAuth0 } from "@auth0/auth0-react";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();

    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin,
        });

    const signUpWithRedirect = () =>
        loginWithRedirect({
            screen_hint: 'signup',
        });

    return (
        <div className="nav-container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                            alt=""
                            src="/assets/brand-only.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Navbar.Brand href="#home">
                            tuple
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            {!isAuthenticated && (
                                <NavDropdown
                                    title={
                                        <FontAwesomeIcon icon={faUser} />
                                    }
                                    id="collasible-nav-dropdown"
                                    className="fas fa-user">
                                    <NavDropdown.Item href="#action/signUp"
                                        onClick={signUpWithRedirect}>
                                        Sign Up
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/logIn"
                                        onClick={loginWithRedirect}>
                                        Log In
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/help">Help</NavDropdown.Item>
                                </NavDropdown>
                            )}
                            {isAuthenticated && (
                                <NavDropdown
                                    title={
                                        <Image 
                                            alt=""
                                            src={user!.picture}
                                            width="30"
                                            height="30"
                                            className="d-inline-block align-top"
                                            roundedCircle
                                        />}
                                    id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#profile">
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/logOut"
                                        onClick={logoutWithRedirect}>
                                        Log Out
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/help">Help</NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

