import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';

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
                        <Nav.Link as={CustomLink} to="/">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/inventory">Inventory</Nav.Link>
                        <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                        {
                            user ?
                                <Nav className='d-flex'>
                                    <Nav.Link as={CustomLink} to='/manageitem'>Manage Items</Nav.Link>
                                    <Nav.Link as={CustomLink} to='/additem'>Add Item</Nav.Link>
                                    <Nav.Link>My Items</Nav.Link>
                                    signed in as <br /> {user.email}
                                    <button onClick={handleSignOut}>Log out</button>
                                </Nav>
                                :
                                <Nav>
                                    <Nav.Link as={CustomLink} to="/signup">Sign Up</Nav.Link>
                                    <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                                </Nav>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;