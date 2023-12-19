import React, { useState } from "react";
import messengerLogo from "../../public/messenger-logo.png";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "white",
    color: "#fff",
  },
  logoContainer: {
    marginBottom: "20px",
  },
  logo: {
    width: "80px",
    height: "auto",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center",
  },
  title: {
    margin: "0 0 20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#1877f2",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  btn_forgotPass: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  register:{
    display: "flex",
    alignItems: 'center',
    gap: '2rem',
    marginTop: '2rem',
  },
  textDesign: {
    color: "#1877f2",
    textDecoration: "underline",
    cursor: "pointer",
  }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    navigate('/home')
  };

  const handleToGoRegister = () => {
    navigate('/registration')
  }

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={messengerLogo} alt="Messenger Logo" style={styles.logo} />
      </div>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>Messenger Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <div style={styles.btn_forgotPass}>
          <button type="submit" style={styles.button}>
            Login
          </button>
          <b
            style={styles.textDesign}
          >
            Forgot Password?
          </b>
        </div>
      </form>
      <div style={styles.register}>
        <h4 style={styles.textDesign} >Don't have Account?</h4>
        <button style={styles.button} onClick={handleToGoRegister}>Register Now</button>
      </div>
    </div>
  );
};

export default Login;
