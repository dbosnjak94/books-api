import styles from "../assets/styles/adminDashboard.module.css";
import { Button, Form } from "react-bootstrap";
import React from "react";
import axios from "axios";

export const RegisterAuthor = () => {
  const addAuthor = () => {
    axios
      .post(
        "http://localhost:3001/api/user/addUser",
        {
          email: email,
          password: password,
          first_name: firstName,
          last_name: lastName,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log(response);
        window.location.reload(false);
      })
      .catch(function (err) {
        alert(err.message);
      });
  };

  return (
    <div className={styles.panel}>
      <Form.Group className="mb-2 mt-2" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-1 mt-4">
          <p className={styles.text}>Email</p>
        </Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form.Label className="mb-1 mt-3">
          <p className={styles.text}>Password</p>
        </Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Form.Label className="mb-1 mt-3">
          <p className={styles.text}>First Name</p>
        </Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <Form.Label className="mb-1 mt-3">
          <p className={styles.text}>Last Name</p>
        </Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <Button onClick={addAuthor} className={styles.button}>
          <p className={styles.text}>Add Author</p>
        </Button>
      </Form.Group>
    </div>
  );
};
