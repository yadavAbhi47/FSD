import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Registration({ regData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  function getData(e) {
    e.preventDefault(); // Prevents the default form submission
    const data = {
      name,
      email,
      pwd,
    };
    regData(data);
  }

  return (
    <div>
      <h2>Welcome to Registration Page</h2>
      <form onSubmit={getData}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPwd(e.target.value)}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
