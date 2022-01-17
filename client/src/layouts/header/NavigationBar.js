import { Navbar, Nav, Container } from "react-bootstrap"
import React from "react"

const NavigaitonBar = () => {
    const firstName = localStorage.getItem("first_name")
    const lastName = localStorage.getItem("last_name")
    const role = localStorage.getItem("role")

    const logout = () => {
        localStorage.clear()
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="">
                        <img
                            alt=""
                            src="/book.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{" "}
                        Welcome {firstName} {lastName}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav className="me-right">
                            {role == 2 ? (
                                <>
                                    <Nav.Link href="/author">
                                        Author dashboard
                                    </Nav.Link>
                                    <Nav.Link href="/authorSection">
                                        Author section
                                    </Nav.Link>
                                </>
                            ) : null}
                            <Nav.Link href="/" onClick={logout}>
                                Log out
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigaitonBar
