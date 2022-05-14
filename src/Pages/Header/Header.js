import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo1 from '../../image/logo/logo-1.png'

const Header = () => {
      const [user] = useAuthState(auth);

      const handleSignOut = () => {
            signOut(auth)
      }

      return (
            <div sticky>
                  <>

                        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                              <Container>
                                    <Navbar.Brand as={Link} to="/">
                                          <img height='60' src={logo1} alt='' />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                          <Nav className="me-auto">

                                          </Nav>
                                          <Nav >
                                                <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                                                <Nav.Link as={Link} to="/manageitem">ManageItem</Nav.Link>
                                                <Nav.Link as={Link} to="/AddItem">AddItem</Nav.Link>
                                                <Nav.Link as={Link} to="/MyItems">MyItems</Nav.Link>
                                                {
                                                      user && <>
                                                            <Nav.Link as={Link} to="/ManageInventory">Manage</Nav.Link>
                                                      </>
                                                }
                                                {
                                                      user ?
                                                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                                            :
                                                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                                }
                                          </Nav>
                                    </Navbar.Collapse>
                              </Container>
                        </Navbar>
                  </>
            </div>
      );
};

export default Header;