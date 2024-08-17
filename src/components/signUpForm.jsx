import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
  });

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const validate = () => {
    let errors = {};

    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.mobile.trim()) errors.mobile = "Mobile number is required";
    if (!formData.country.trim()) errors.country = "Country is required";
    if (!formData.state.trim()) errors.state = "State is required";
    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.pinCode.trim()) errors.pinCode = "Pin code is required";
    if (!formData.password.trim()) errors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    if (!formData.isChecked)
      errors.isChecked = "You must confirm that the data is true";

    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("User registered successfully!");
      history.push("/login");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.mobile && <p style={styles.error}>{errors.mobile}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.country && <p style={styles.error}>{errors.country}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.state && <p style={styles.error}>{errors.state}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.city && <p style={styles.error}>{errors.city}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Pin Code</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.pinCode && <p style={styles.error}>{errors.pinCode}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Re-enter Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
        </div>
        <div style={styles.checkboxGroup}>
          <input
            type="checkbox"
            name="isChecked"
            checked={formData.isChecked}
            onChange={handleChange}
            style={styles.checkbox}
          />
          <label style={styles.checkboxLabel}>
            I confirm that the above information is true
          </label>
          {errors.isChecked && <p style={styles.error}>{errors.isChecked}</p>}
        </div>
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#FFF3C7",
    padding: "20px", // Add padding to ensure the content doesn't touch the edges
  },
  title: {
    color: "#F7418F",
    marginBottom: "20px",
  },
  form: {
    backgroundColor: "#FEC7B4",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#F7418F",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #FC819E",
  },
  checkboxGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  checkbox: {
    marginRight: "10px",
  },
  checkboxLabel: {
    color: "#F7418F",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#FC819E",
    color: "#FFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
};

export default SignUpForm;
