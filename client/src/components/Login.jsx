import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/login.css";
import { useState } from "react";
const Login = () => {
  const [showPassword, setShowPassword] = useState("hidden");
  const [inputValue, setInputValue] = useState("");
  const passwordHandler = (e) => {
    setInputValue(e.target.value);
    setShowPassword(inputValue.trim() !== "" ? "block" : "hidden");
  };
  return (
    <>
      <div className="form-input-container">
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-input-container relative">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(event) => passwordHandler(event)}
        />
        <span className={`eye-icon ${showPassword}`}>
          <FontAwesomeIcon icon={faEye} />
        </span>
        <span className={`eye-icon ${showPassword}`}>
          <FontAwesomeIcon icon={faEyeSlash} />
        </span>
      </div>
    </>
  );
};

export default Login;
