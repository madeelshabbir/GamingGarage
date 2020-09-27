import React, { Component } from 'react';
import { Input, Form, FormGroup, Label, Col, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModal1Open: false,
            isModal2Open: false,
            isModal3Open: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal1 = this.toggleModal1.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
        this.toggleModal3 = this.toggleModal3.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleUserCreation = this.handleUserCreation.bind(this);
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal1 = () => {
        this.setState({
            isModal1Open: !this.state.isModal1Open
        });
    }
    
    toggleModal2 = () => {
        this.setState({
            isModal2Open: !this.state.isModal2Open
        });
    }

    toggleModal3 = () => {
        this.setState({
            isModal3Open: !this.state.isModal3Open
        });
    }

    handleLogin = (event) => {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    handleUserCreation = (event) => {
        this.toggleModal();
        alert("Username: " + this.usernamec.value + " Email: " + this.email.value
            + " Password: " + this.passwordc.value);
        event.preventDefault();
    }

    render(){
        return(
        <React.Fragment>
            <Navbar dark expand="md" className="nav-bar sticky-nav" fixed='top'>
                <div className="container-fluid">
                    <NavbarToggler onClick={this.toggleModal3}>
                        <img src={'../assets/images/navtoggler.png'} height="30" width="30" alt='Toggler' />
                    </NavbarToggler>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src={'../assets/images/logo.png'} height="50" width="50" alt='Gaming Garage' />
                    </NavbarBrand>
                    <span className="order-sm-2">
                        <Link style={{ position: 'right' }} onClick={this.toggleModal1} className="nav-link" to='#'><span className="fa fa-sign-in"></span> Login</Link>
                    </span>
                    <Collapse isOpen={false} navbar>
                        <Nav navbar>
                            <NavItem className="ml-5 ml-md-0">
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem className="ml-5 ml-md-0">
                                <NavLink className="nav-link" to='/cart'><span className="fa fa-shopping-cart fa-lg"></span> Cart</NavLink>
                            </NavItem>
                            <NavItem className="ml-5 ml-md-0">
                                <NavLink className="nav-link" to='/support'><span className="fa fa-address-card fa-lg"></span> Support</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <span className="btn-group order-sm-1 mx-auto" role="group">
                        <Input type="search" id="search" name="search" placeholder="Search" />
                        <Button>Search</Button>
                    </span>
                </div>
            </Navbar>
            <Modal isOpen={this.state.isModal1Open} onSubmit={this.handleLogin}>
                <ModalHeader>
                    <Button onClick={this.toggleModal1} className="close">&times;</Button>
                    <h4><span className="fa fa-sign-in"></span> Login</h4>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label className="modal-label" htmlFor="username" md={{size: 2, offset: 2}}>Username</Label>
                            <Col md={6}>
                                <Input type="text" id="username" name="username" placeholder="Username" innerRef={(input) => this.username = input}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="modal-label" htmlFor="password" md={{size: 2, offset: 2}}>Password</Label>
                            <Col md={6}>
                                <Input type="password" id="password" name="password" placeholder="Password" innerRef={(input) => this.password = input}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col xs={{offset: 2}}>
                                <Input class="form-check-input" type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>
                                <Label class="form-check-label"> Remember me</Label>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <a href='#' onClick={() => { this.toggleModal1(); this.toggleModal2();}} className="create-account" md={{offset:2}}>Don't have account</a>
                    <Button onClick={this.toggleModal1} type="button" class="btn btn-secondary btn-sm ml-auto">Cancel</Button>
                    <Button type="submit" class="btn btn-primary btn-sm ml-1">Sign in</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={this.state.isModal2Open}>
                <ModalHeader>
                    <Button onClick={this.toggleModal2} className="close">&times;</Button>
                    <h4><span className="fa fa-user"></span> Create User</h4>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label className="modal-label" htmlFor="username" md={{size: 2, offset: 2}}>Username</Label>
                            <Col md={6}>
                                <Input type="text" id="username" name="usernamec" placeholder="Username" innerRef={(input) => this.usernamec = input} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="modal-label" htmlFor="email" md={{size: 2, offset: 2}}>Email</Label>
                            <Col md={6}>
                                <Input type="email" id="email" name="email" placeholder="Email" innerRef={(input) => this.email = input} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="modal-label" htmlFor="password" md={{size: 2, offset: 2}}>Password</Label>
                            <Col md={6}>
                                <Input type="password" id="password" name="passwordc" placeholder="Password" innerRef={(input) => this.passwordc = input}/>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <a href='#' onClick={() => { this.toggleModal1(); this.toggleModal2();}} className="create-account" md={{offset:2}}>Create an account</a>
                    <Button onClick={this.toggleModal2} type="button" class="btn btn-secondary btn-sm ml-auto">Cancel</Button>
                    <Button type="submit" class="btn btn-primary btn-sm ml-1">Sign up</Button>
                </ModalFooter>
            </Modal>
            <Modal role="dialog" location={this.props.location} style={{margin: '0px'}} isOpen={this.state.isModal3Open}>
                <div className="modal-three">
                <div variant="raised" onClick={this.toggleModal3} className="close close-sz"/>
                <ModalBody>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src={'../assets/images/logo.png'} height="100" width="100" alt='Gaming Garage' />
                    </NavbarBrand>
                    <Nav navbar>
                            <NavItem style={{borderBottom: '1px solid #0C0F0A'}}>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem style={{borderBottom: '1px solid #0C0F0A'}}>
                                <NavLink className="nav-link" to='/cart'><span className="fa fa-shopping-cart fa-lg"></span> Cart</NavLink>
                            </NavItem>
                            <NavItem style={{borderBottom: '1px solid #0C0F0A'}}>
                                <NavLink className="nav-link" to='/support'><span className="fa fa-address-card fa-lg"></span> Support</NavLink>
                            </NavItem>
                     </Nav>
                </ModalBody>
                </div>
            </Modal>
            <Jumbotron style={{ backgroundImage: `url(${'../assets/images/jumback.png'})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right'}}>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Gaming Garage</h1>
                            <p>A place where dreams begin!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </React.Fragment>
       );
    }
}

export default Header;