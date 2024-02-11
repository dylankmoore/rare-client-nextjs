import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from './rare.jpeg';

function AppNavBar() {
  // const navigate = useRouter();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image src={Logo} height="3rem" alt="Rare Logo" />
            <h1 className="title is-4">Rare Publishing</h1>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-nav" />
        <Navbar.Collapse id="responsive-nav">
          <Nav className="ml-auto">
            <Link passHref href="/Posts">
              <Nav.Link>Posts</Nav.Link>
            </Link>
            <Link passHref href="/Tags">
              <Nav.Link>Tag Manager</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;
