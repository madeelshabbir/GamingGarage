import React, { Component } from 'react';
import { Input, Form, FormGroup, Label, Col, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModal1Open: false,
            isModal2Open: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal1 = this.toggleModal1.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal1(){
        this.setState({
            isModal1Open: !this.state.isModal1Open
        });
    }
    
    toggleModal2(){
        this.setState({
            isModal2Open: !this.state.isModal2Open
        });
    }

    render(){
        return(
        <React.Fragment>
            <Navbar dark expand="md" className="nav-bar">
                <div className="container-fluid">
                    <NavbarToggler onClick={this.toggleNav}>
                        <img src='assets/images/navtoggler.png' height="30" width="30" alt='Toggler' />
                    </NavbarToggler>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src='assets/images/logo.png' height="50" width="50" alt='Gaming Garage' />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <a style={{ color: '#0C0F0A' }} className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</a>
                            </NavItem>
                            <NavItem>
                                <a style={{ color: '#0C0F0A' }} className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About</a>
                            </NavItem>
                            <NavItem>
                                <a style={{ color: '#0C0F0A' }} className="nav-link"  to='/community'><span className="fa fa-users fa-lg"></span> Community</a>
                            </NavItem>
                            <NavItem>
                                <a style={{ color: '#0C0F0A' }} className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Support</a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <span className="order-sm-2">
                        <a onClick={this.toggleModal1} className="nav-link" ><span className="fa fa-sign-in"></span> Login</a>
                    </span>
                    <span className="btn-group order-sm-1" role="group">
                        <Input type="search" id="search" name="search" placeholder="Search" />
                        <Button>Search</Button>
                    </span>
                </div>
            </Navbar>
            <Modal isOpen={this.state.isModal1Open}>
                <ModalHeader>
                    <Button onClick={this.toggleModal1} className="close">&times;</Button>
                    <h4><span className="fa fa-sign-in"></span> Login</h4>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label className="modal-label" htmlFor="username" md={{size: 2, offset: 2}}>Username</Label>
                            <Col md={6}>
                                <Input type="text" id="username" name="username" placeholder="Username" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="modal-label" htmlFor="password" md={{size: 2, offset: 2}}>Password</Label>
                            <Col md={6}>
                                <Input type="password" id="password" name="password" placeholder="Password" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col xs={{offset: 2}}>
                                <Input class="form-check-input" type="checkbox" />
                                <Label class="form-check-label"> Remember me</Label>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <a onClick={() => { this.toggleModal1(); this.toggleModal2();}} className="create-account" md={{offset:2}}>Don't have account</a>
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
                                <Input type="text" id="username" name="username" placeholder="Username" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="modal-label" htmlFor="email" md={{size: 2, offset: 2}}>Email</Label>
                            <Col md={6}>
                                <Input type="email" id="email" name="email" placeholder="Email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="modal-label" htmlFor="password" md={{size: 2, offset: 2}}>Password</Label>
                            <Col md={6}>
                                <Input type="password" id="password" name="password" placeholder="Password" />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <a onClick={() => { this.toggleModal1(); this.toggleModal2();}} className="create-account" md={{offset:2}}>Already have account</a>
                    <Button onClick={this.toggleModal2} type="button" class="btn btn-secondary btn-sm ml-auto">Cancel</Button>
                    <Button type="submit" class="btn btn-primary btn-sm ml-1">Sign up</Button>
                </ModalFooter>
            </Modal>
            <Jumbotron style={{ backgroundImage: `url(${'assets/images/jumback.png'})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right'}}>
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