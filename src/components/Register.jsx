import React, { useState } from "react";
import "./Register.css";

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleToggle = () => {
    setIsLogin(!isLogin);
    // Reset form on toggle
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic here
      alert(`Logging in as: \nUsername/Email: ${formData.username || formData.email}`);
    } else {
      // Signup validation example
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Signup logic here
      alert(`Signing up user:\nUsername: ${formData.username}\nEmail: ${formData.email}`);
    }
  };

  return (
    <div className="login-signup-container">
      <div className="toggle-buttons">
        <button
          className={isLogin ? "active" : ""}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={!isLogin ? "active" : ""}
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="text"
          name={isLogin ? "username" : "email"}
          placeholder={isLogin ? "Username or Email" : "Email"}
          value={isLogin ? (formData.username || formData.email) : formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}

        <button type="submit" className="submit-btn">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>

      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span onClick={handleToggle} className="toggle-link">
          {isLogin ? "Sign up here" : "Login here"}
        </span>
      </p>
    </div>
  );
}
