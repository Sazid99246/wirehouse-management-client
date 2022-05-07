import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Sazid's PC Inventory</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>

                        {
                            user ?
                                <Nav className='d-flex'>
                                    <Nav.Link>Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to='/additem'>Add Item</Nav.Link>
                                    <Nav.Link>My Items</Nav.Link>
                                    <button onClick={handleSignOut}>Log out</button>
                                </Nav>
                                :
                                <Nav>
                                    <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                </Nav>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;