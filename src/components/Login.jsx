import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ regDataLogin }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  function verification(e) {
    e.preventDefault();
    if (regDataLogin?.email === email && regDataLogin?.pwd === pwd) {
      alert("Login Successful");
      navigate("/dash");
    } else {
      alert("Login Failed");
    }
  }

  return (
    <div>
      <form onSubmit={verification}>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            className="form-control" 
            id="inputEmail" 
            aria-describedby="emailHelp" 
            placeholder="Enter email" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input 
            onChange={(e) => setPwd(e.target.value)} 
            type="password" 
            className="form-control" 
            id="inputPassword" 
            placeholder="Password" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;
