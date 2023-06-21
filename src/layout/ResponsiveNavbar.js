import { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";

const ResponsiveNavbar = ({searchUser}) => {
  const [value, setValue] = useState()
  const onInput = ({ target: { value } }) => setValue(value)
  return (
    <Navbar bg="primary" collapseOnSelect expand="sm">
      <Container>
        <h4>Sitio de usuarios</h4>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="me-auto">
            <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="/link"></Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={onInput}
              value={value}
            />
            <Button variant="outline-light" onClick={() => {
              searchUser(value)
            }}>Buscar</Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
