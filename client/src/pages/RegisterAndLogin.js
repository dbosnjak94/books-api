import { Button, Form, Row, Col } from "react-bootstrap"
import React, { useState } from "react"
import axios from "axios"

import styles from "../assets/styles/registrationAndLogin.module.css"

const RegisterAndLogin = () => {
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [firstNameReg, setFirstNameReg] = useState("")
    const [lastNameReg, setLastNameReg] = useState("")

    const register = () => {
        axios
            .post("http://localhost:3001/api/auth/signUp", {
                first_name: firstNameReg,
                last_name: lastNameReg,
                email: emailReg,
                password: passwordReg,
            })
            .then((response) => {
                console.log(response)
                if (response.data.status === 409) {
                    alert(
                        "User with this mail already exists, please try different email!"
                    )
                } else if (response.data.status === 200) {
                    localStorage.setItem("email", response.data.data.email)
                    localStorage.setItem("role", response.data.data.id_role)
                    localStorage.setItem(
                        "first_name",
                        response.data.data.first_name
                    )
                    localStorage.setItem(
                        "last_name",
                        response.data.data.last_name
                    )
                    localStorage.setItem("jwt", response.data.data.token)
                    localStorage.setItem("id_user", response.data.data.id_user)
                    window.location = "/author"
                }
            })
            .catch(function (err) {
                console.log(err.message)
            })
    }

    const login = () => {
        axios
            .post("http://localhost:3001/api/auth/signIn", {
                email: emailReg,
                password: passwordReg,
            })
            .then((response) => {
                console.log(response.data)

                console.log()

                if (response.data.status === 403) {
                    alert("Wrong email or password, please try again")
                }

                if (
                    response.data.data.id_role === 1 &&
                    response.data.status === 200
                ) {
                    window.location = "/admin"
                    localStorage.setItem("email", response.data.data.email)
                    localStorage.setItem("role", response.data.data.id_role)
                    localStorage.setItem(
                        "first_name",
                        response.data.data.first_name
                    )
                    localStorage.setItem(
                        "last_name",
                        response.data.data.last_name
                    )
                    localStorage.setItem("jwt", response.data.token)
                    localStorage.setItem("id_user", response.data.data.id_user)
                } else if (
                    response.data.data.id_role === 2 &&
                    response.data.status === 200
                ) {
                    window.location = "/author"
                    localStorage.setItem("email", response.data.data.email)
                    localStorage.setItem("role", response.data.data.id_role)
                    localStorage.setItem(
                        "first_name",
                        response.data.data.first_name
                    )
                    localStorage.setItem(
                        "last_name",
                        response.data.data.last_name
                    )
                    localStorage.setItem("jwt", response.data.token)
                    localStorage.setItem("id_user", response.data.data.id_user)
                }
            })
    }

    return (
        <div className={styles.registerAndLogin}>
            <h1 className={styles.title}>Book Api</h1>
            <Row>
                <Col xs={6} md={6}>
                    <Form>
                        <Form.Group
                            className="mb-2 mt-2"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label className="mb-1 mt-4">
                                <p className={styles.subtitles}>First Name</p>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    setFirstNameReg(e.target.value)
                                }}
                            />
                            <Form.Label className="mb-1 mt-3">
                                <p className={styles.subtitles}>Last Name</p>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    setLastNameReg(e.target.value)
                                }}
                            />
                            <Form.Label className="mb-1 mt-3">
                                <p className={styles.subtitles}>Email</p>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    setEmailReg(e.target.value)
                                }}
                            />
                            <Form.Label className="mb-1 mt-3">
                                <p className={styles.subtitles}>Password</p>
                            </Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(e) => {
                                    setPasswordReg(e.target.value)
                                }}
                            />
                            <Button
                                onClick={register}
                                className={styles.button}
                            >
                                {" "}
                                Register{" "}
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>

                <Col xs={6} md={6}>
                    <Form>
                        <Form.Group
                            className="mb-2 mt-2"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label className="mb-1 mt-4">
                                <p className={styles.subtitles}>Email</p>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    setEmailReg(e.target.value)
                                }}
                            />
                            <Form.Label className="mb-1 mt-3">
                                <p className={styles.subtitles}>Password</p>
                            </Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(e) => {
                                    setPasswordReg(e.target.value)
                                }}
                            />
                            <Button onClick={login} className={styles.button}>
                                {" "}
                                Login{" "}
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default RegisterAndLogin
