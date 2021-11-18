import React from 'react';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar style={{ backgroundColor: 'f2f2f2' }} collapseOnSelect expand="lg" >
                <Container className="common-text-color">
                    <Navbar.Brand className="common-text-color" href="#home">Goriber Gari</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="common-text-color" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link
                            className="common-text-color" as={HashLink} to="/home#services">Products</Nav.Link>
                        <Nav.Link
                            className="common-text-color" as={HashLink} to="/home#membership">Join Us</Nav.Link>
                        <Nav.Link
                            className="common-text-color" as={HashLink} to="/home#trainers">Our Trainers</Nav.Link>
                        <Nav.Link as={HashLink} to="/exploreItems"><Button color="inherit">Garage</Button></Nav.Link>
                        {
                            user?.email ?
                                <Box>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>
                                    <Button onClick={logout} color="inherit">Logout</Button>
                                </Box>
                                :
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;