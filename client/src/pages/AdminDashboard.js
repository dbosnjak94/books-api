import NavigationBar from "../layouts/header/NavigationBar";
import * as ReactBootStrap from "react-bootstrap"
import {Button} from "react-bootstrap";

const AdminDashboard = () =>{

        const list = [
                {
                        book_name: "book1",
                        first_name: "name1",
                        last_name: "name1"
                },
                {
                        book_name: "book2",
                        first_name: "name2",
                        last_name: "name2"
                },
                {
                        book_name: "book3",
                        first_name: "name3",
                        last_name: "name3"
                },
                {
                        book_name: "book4",
                        first_name: "name4",
                        last_name: "name4"
                },
        ]

        const renderList = (book, index) => {
                return (
                    <tr key={index}>
                            <td>{book.book_name}</td>
                            <td>{book.first_name}</td>
                            <td>{book.last_name}</td>
                            <td><Button>Edit</Button></td>
                            <td><Button variant="danger">Delete</Button></td>
                    </tr>
                )
        }

        return <div>
                <NavigationBar/>
                <h1>Hello Admin</h1>
                <ReactBootStrap.Table striped bordered hover variant="light">
                        <thead>
                        <tr>
                                <th>Book Name</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th></th>
                                <th></th>

                        </tr>
                        </thead>
                        <tbody>
                        {list.map(renderList)}
                        </tbody>
                </ReactBootStrap.Table>
        </div>;
}

export default AdminDashboard;
