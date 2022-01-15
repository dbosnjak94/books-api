import NavigationBar from "../layouts/header/NavigationBar"
import * as ReactBootStrap from "react-bootstrap"
import { Button, Row, Col, Form } from "react-bootstrap"
import axios from "axios"

import styles from "../assets/styles/adminDashboard.module.css"
import React, { useState, useEffect } from "react"
import { AuthorEditDialog } from "./AuthorEditDialog"

const AdminDashboard = () => {
    const [listOfAuthors, setListOfAuthors] = useState([])
    const [editDialogState, setEditDialogState] = useState({
        isOpen: false,
        selected: {},
    })

    const jwt = localStorage.getItem("jwt")
    axios.defaults.headers.jwt = jwt

    const getAllAuthors = async () => {
        const response = await axios
            .get("http://localhost:3001/api/user/getAllUsers", {
                headers: {
                    jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkX3VzZXIiOjEsInJvbGUiOjF9LCJpYXQiOjE2NDIxMDgzOTR9.xBa0HSNwRXyfZgQH0AtPdp20TXALuSSts-wyE9GSHXk",
                },
            })
            .then((response) => {
                setListOfAuthors(response.data.data)
            })
            .catch(function (err) {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getAllAuthors()
    }, [])

    const onEditClose = () => {
        setEditDialogState({
            isOpen: false,
            selected: {},
        })
    }

    const deleteAuthor = (data) => {
        axios
            .delete(
                "http://localhost:3001/api/user/deleteUser",
                {
                    data: {
                        id_user: data.id_user,
                    },
                },
                {
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                    },
                }
            )
            .then((response) => {
                console.log(response)
                window.location.reload(false)
            })
            .catch(function (err) {
                alert(err.message)
            })
    }

    return (
        <>
            <div className={styles.adminDashboard}>
                <NavigationBar />
                <Row>
                    <Col xs={8} md={8} className={styles.list}>
                        <h1 className={styles.text}>List of Authors</h1>
                        <ReactBootStrap.Table
                            striped
                            bordered
                            hover
                            variant="light"
                        >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {listOfAuthors.map((author, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{author.id_user}</td>
                                            <td>
                                                <p>{author.first_name}</p>
                                            </td>
                                            <td>
                                                <p>{author.last_name}</p>
                                            </td>
                                            <td>{author.email}</td>
                                            <td>
                                                <Button
                                                    onClick={() =>
                                                        setEditDialogState({
                                                            isOpen: true,
                                                            selected: author,
                                                        })
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={() =>
                                                        deleteAuthor(author)
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </ReactBootStrap.Table>
                    </Col>
                    <Col xs={4} md={4}>
                        <h1 className={styles.text}>Add User</h1>
                        {/*// TODO: add register*/}
                    </Col>
                </Row>
            </div>
            {editDialogState.isOpen ? (
                <AuthorEditDialog
                    isOpen={editDialogState.isOpen}
                    value={editDialogState.selected}
                    onClose={onEditClose}
                />
            ) : null}
        </>
    )
}

export default AdminDashboard
