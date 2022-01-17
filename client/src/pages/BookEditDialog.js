import axios from "axios"
import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

export const BookEditDialog = (props) => {
    const { isOpen, value, onClose } = props

    const [book, setBook] = useState(value)

    const editBook = () => {
        axios
            .put("http://localhost:3001/api/book/editBook", {
                id_book: book.id_book,
                book_name: book.book_name,
            })
            .then(() => {
                onClose()
                window.location.reload(false)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const onFieldChange = (event) => {
        setBook((currentState) => {
            return {
                ...currentState,
                [event.target.name]: event.target.value,
            }
        })
    }

    return isOpen ? (
        <Modal.Dialog>
            <Modal.Header closeButton onHide={onClose}>
                <Modal.Title>Edit Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    name="book_name"
                    onChange={onFieldChange}
                    placeholder="Book name"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={editBook}>
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal.Dialog>
    ) : null
}
