// Home.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/page1">Page 1</Nav.Link>
            <Nav.Link as={Link} to="/page2">Page 2</Nav.Link>
            <Nav.Link as={Link} to="/page3">Page 3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;