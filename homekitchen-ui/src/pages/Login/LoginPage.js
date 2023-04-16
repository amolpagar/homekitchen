import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { loginUser } from "../../utils/api";
import "../../styles/Login.css";

const LoginPage = () => {
  const { values, handleChange, handleSubmit } = useForm(
    { email: "", password: "" },
    () => {
      loginUser(values);
    }
  );

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/customer-registration">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
