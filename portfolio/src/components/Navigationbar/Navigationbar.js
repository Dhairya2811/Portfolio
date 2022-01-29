import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import style from './Navigationbar.module.css';
import 'animate.css';

const Navigationbar = () => (
  <div className="animate__animated animate__fadeInDown animate__delay-0.5s">
    <div className={style.Navigationbar}>
      <Navbar bg="transferent" fixed="top" className={style.Navigationbar}>
        <Navbar.Brand className={style.bold} className={style.logo}><span className={style.samecolor}>DS</span></Navbar.Brand>
        <Nav className='justify-content-end' style={{ width:"100%" }}>
            <Nav.Link href="#homePage"><span className={style.samecolor}>HOME</span></Nav.Link>
            <Nav.Link href="#aboutPage"><span className={style.samecolor}>ABOUT</span></Nav.Link>
            <Nav.Link href="#"><span className={style.samecolor}>PROJECTS</span></Nav.Link>
            <Nav.Link href="#"><span className={style.samecolor}>CONTACT</span></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  </div>
);

Navigationbar.propTypes = {};

Navigationbar.defaultProps = {};

export default Navigationbar;