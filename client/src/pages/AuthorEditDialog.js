import axios from "axios"
import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

export const AuthorEditDialog = (props) => {
    const { isOpen, value, onClose } = props

    const [user, setUser] = useState(value)

    const editAuthor = () => {
        axios
            .put("http://localhost:3001/api/user/editUser", {
                id_user: user.id_user,
                email: user.email,
                password: user.password,
                first_name: user.first_name,
                last_name: user.last_name,
            })
            .then(() => {
                onClose()
                window.location.reload(false)
            })
            .catch((error) => {
                console.log(error)
                alert("User cannot be edited")
            })
    }

    const onFieldChange = (event) => {
        setUser((currentState) => {
            return {
                ...currentState,
                [event.target.name]: event.target.value,
            }
        })
    }

    return isOpen ? (
        <Modal.Dialog>
            <Modal.Header closeButton onHide={onClose}>
                <Modal.Title>Edit Author</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    name="first_name"
                    onChange={onFieldChange}
                    placeholder="First Name"
                />
                <Form.Control
                    name="last_name"
                    onChange={onFieldChange}
                    placeholder="Last Name"
                />
                <Form.Control
                    name="email"
                    onChange={onFieldChange}
                    placeholder="Email"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={editAuthor}>
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal.Dialog>
    ) : null
}
