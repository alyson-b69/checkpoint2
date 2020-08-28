import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const HeaderNav = () => {
  return (
    <header className="mb-2">
      <Navbar bg="dark" variant="dark" className="space-around">
        <Navbar>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://feel-ink-good.com/wp-content/uploads/2020/03/avatar2-261x300.png"
              width="120px"
              height="120px"
              className="d-inline-block mr2 ml5"
            />
          </Navbar.Brand>

          <Nav className="mr-auto ml2 nav-menu-item">
            <Nav.Link href="/">Accueil</Nav.Link>
          </Nav>
        </Navbar>
      </Navbar>
    </header>
  );
};

export default HeaderNav;
