import Head from "next/head";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
//import { Link,  } from "react-router-dom";

function NavigationMenu() {
  //const {pathname} = useLocation()
  return (
    <>
      <Head>
        <title>Kenny Kolawole</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg="white" expand={"lg"} className="mb-3 shadow-md" fixed="top">
        <Container className="py-2">
          <Navbar.Brand href="#">Kenny Kolawole</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="top"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Kenny Kolawole
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link
                  className={`nav-link hover:border-b hover:border-red-300 text-xl mr-10`}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className={`nav-link hover:border-b hover:border-red-300 text-xl mr-10 `}
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className={`nav-link hover:border-b hover:border-red-300 text-xl`}
                  href="/contact"
                >
                  Contact
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationMenu;
