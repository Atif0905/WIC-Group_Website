import React, { useState } from "react";
import Link from "next/link";
import UploadOptions from "../UploadOptions/UploadOptions";
export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function login(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        setRedirect(true);
      } else {
        alert("Wrong credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="login pt-5" onSubmit={login}>
            <h3 className="text-center mb-4">Login Panel For Admin</h3>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            {redirect && <UploadOptions />}
          </form>
        </div>
      </div>
    </div>
  );
}