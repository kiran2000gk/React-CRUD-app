import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteUsers from "../users/DeleteUsers";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
    // console.log("working");
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUser(result.data);
    // console.log(result);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container ">
      <h1> Home</h1>

      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">User ID</th>
            <th scope="col">Email</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row"> {index + 1}</th>
              <td> {user.name}</td>
              <td> {user.username}</td>
              <td> {user.email}</td>
              <td>
                <Link
                  className="btn btn-outline-primary"
                  to={`/users/user/${user.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary  m-2"
                  to={`/users/edit/${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-outline-danger"
                  onClick={() => deleteUsers(user.id)}
                  // to="/users/delete"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
