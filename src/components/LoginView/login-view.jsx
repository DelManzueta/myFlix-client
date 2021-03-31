import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { RegistrationView } from "../RegistrationView/registration";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);

    axios.post("https://myflixdbs-z.herokuapp.com/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {console.log("User does not exist")});
  };

  return (
    <Form>
      <Form.Group controlId="formBasicUsername">
        <Form.Label className="username-label">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="password-label">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button className="button-login" type="button" onClick={handleSubmit}>
        Login
      </Button>
      <p>
        Not registered? Click{" "}
        <span
          className="span-login"
          type="text"
          onClick={() => props.newUser()}
        >
          here
        </span>{" "}
        to register
      </p>
    </Form>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }),
};
