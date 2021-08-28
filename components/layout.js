import Head from "next/head";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>LACI</title>
        <meta name="description" content="LA County COVID Info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar variant="dark" bg="dark" expand="md">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="/coronavirus.svg"
                width="30"
                height="30"
                alt="Site Logo"
                className="align-top me-2"
              />{" "}
              LA County COVID Info
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#admin">Admin</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
      <footer className="footer text-center text-muted mb-3">
        <div>
          Copyright &copy; Chengyu Sun 2021.
          <br />
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </>
  );
}
