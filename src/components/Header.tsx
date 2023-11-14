import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
  return (
    <Container>
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#">To-Do List</Navbar.Brand>
        </Container>
        </Navbar>
  </Container>

  )
}

