import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    history.push("/");
  };

  return (
    <div className="container p-5">
      <div className="w-75 mx-auto shadow p-4">
        <h1 className="text-center mb-4"> Add User</h1>

        <form className="container" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group m-2 ">
            <input
              type="text"
              className="form-control form-control-lg"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              placeholder="Enter your Name"
            />
          </div>
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group m-2">
            <input
              type="email"
              className="form-control form-control-lg"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
              placeholder="Enter your Email"
            />
          </div>
          <div className="form-group m-2">
            <input
              type="phone"
              className="form-control form-control-lg"
              name="phone"
              value={phone}
              maxLength="10"
              onChange={(e) => onInputChange(e)}
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="form-group m-2">
            <input
              type="website"
              className="form-control form-control-lg"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
              placeholder="Enter your Website"
            />
          </div>

          <button className="btn btn-dark w-100 ml-5 mt-5 ">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
