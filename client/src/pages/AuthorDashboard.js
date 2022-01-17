import { Button } from "react-bootstrap"
import NavigationBar from "../layouts/header/NavigationBar"
import * as ReactBootStrap from "react-bootstrap"

import React, { useState, useEffect } from "react"
import axios from "axios"

const AuthorDashboard = () => {
    const [listOfBooksAndAuthors, setListOfBooksAndAuthors] = useState([])

    const getAllBooksAndAuthors = async () => {
        await axios
            .get("http://localhost:3001/api/book/getAllBooksAndAuthors")
            .then((response) =>
                //console.log(response.data.listOfBooksAndAuthors)
                setListOfBooksAndAuthors(response.data.listOfBooksAndAuthors)
            )
            .catch(function (err) {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getAllBooksAndAuthors()
    }, [])

    return (
        <div>
            <NavigationBar />
            <h1>Hello Author</h1>
            <ReactBootStrap.Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Book Name</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfBooksAndAuthors.length !== 0
                        ? listOfBooksAndAuthors.map((book, index) => {
                              return (
                                  <tr key={index}>
                                      <td>{book.id_book}</td>
                                      <td>
                                          <p>{book.first_name}</p>
                                      </td>
                                      <td>
                                          <p>{book.last_name}</p>
                                      </td>
                                      <td>{book.book_name}</td>
                                  </tr>
                              )
                          })
                        : null}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}

export default AuthorDashboard
