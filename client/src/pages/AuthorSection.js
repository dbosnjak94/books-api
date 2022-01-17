import NavigationBar from "../layouts/header/NavigationBar"

import React, { useState, useEffect } from "react"
import axios from "axios"
import * as ReactBootStrap from "react-bootstrap"
import { Button, Row, Col, Form } from "react-bootstrap"
import { BookEditDialog } from "./BookEditDialog"

import styles from "../assets/styles/authorSection.module.css"

function AuthorSection() {
    const id_user = localStorage.getItem("id_user")
    const [listOfBooks, setListOfBooks] = useState([])
    const [editDialogState, setEditDialogState] = useState({
        isOpen: false,
        selected: {},
    })

    const onEditClose = () => {
        setEditDialogState({
            is_open: false,
            selected: {},
        })
    }

    const [createBook, setCreateBook] = useState({
        id_user: parseInt(id_user),
        book_name: "",
    })

    const getListOfAuthorBooks = async () => {
        await axios
            .get(`http://localhost:3001/api/book/getBooksByAuthor/${id_user}`)
            .then((response) => {
                console.log(response.data)
                setListOfBooks(response.data.data)
            })
            .catch(function (err) {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getListOfAuthorBooks()
    }, [])

    const addBook = () => {
        console.log(createBook)
        axios
            .post(
                "http://localhost:3001/api/book/addBook",
                {
                    id_user: createBook.id_user,
                    book_name: createBook.book_name,
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

    const deleteBook = (data) => {
        axios
            .delete("http://localhost:3001/api/book/deleteBook", {
                data: {
                    id_book: data.id_book,
                },
            })
            .then((response) => {
                console.log(response)
                window.location.reload(false)
            })
            .catch(function (err) {
                alert(err.message)
            })
    }

    return (
        <div>
            <NavigationBar />
            <h1>Author section</h1>
            <Row>
                <Col xs={8} md={8} className={styles.list}>
                    <ReactBootStrap.Table
                        striped
                        bordered
                        hover
                        variant="light"
                    >
                        <thead>
                            <tr>
                                <th>Book ID</th>
                                <th>Book Name</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOfBooks.length !== 0
                                ? listOfBooks.map((book, index) => {
                                      return (
                                          <tr key={index}>
                                              <td>{book.id_book}</td>
                                              <td>
                                                  <p>{book.book_name}</p>
                                              </td>
                                              <td>
                                                  <Button
                                                      onClick={() =>
                                                          setEditDialogState({
                                                              isOpen: true,
                                                              selected: book,
                                                          })
                                                      }
                                                  >
                                                      Edit
                                                  </Button>
                                              </td>
                                              <td>
                                                  <Button
                                                      variant="danger"
                                                      onClick={() =>
                                                          deleteBook(book)
                                                      }
                                                  >
                                                      Delete
                                                  </Button>
                                              </td>
                                          </tr>
                                      )
                                  })
                                : null}
                        </tbody>
                    </ReactBootStrap.Table>
                </Col>
                <Col xs={8} md={8} className={styles.list}>
                    <div className={styles.panel}>
                        <h1 className={styles.text}>Add Book</h1>
                        <Form.Group
                            className="mb-2 mt-2"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label className="mb-1 mt-3">
                                <p className={styles.text}>Book Name</p>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="book_name"
                                onChange={(e) => {
                                    const { name, value } = e.target
                                    setCreateBook((prevState) => ({
                                        ...prevState,
                                        [name]: value,
                                    }))
                                }}
                            />
                            <Button onClick={addBook} className={styles.button}>
                                <p className={styles.text}>Create Book</p>
                            </Button>
                        </Form.Group>
                    </div>
                </Col>
            </Row>
            {editDialogState.isOpen ? (
                <BookEditDialog
                    isOpen={editDialogState.isOpen}
                    value={editDialogState.selected}
                    onClose={onEditClose}
                />
            ) : null}
        </div>
    )
}

export default AuthorSection
