import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterField } from "../redux/registerSlice";
const Login = () => {
  const [showPassword, setShowPassword] = useState("hidden");
  const [toggleIcon, setToggleIcon] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handlePassword = (e) => {
    
  }

  const {email, password} = useSelector(store => store.register);
  const dispatch = useDispatch();
  const toggleEyeIcon = () => {
    setToggleIcon(prev => !prev);
  }

  const handleChange = (e)=>{
    const {name, value} = e.target;
    dispatch(setRegisterField({field:name, value}));
  }
  return (
    <>
      <div className="form-input-container">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={email} onChange={handleChange}/>
      </div>
      <div
        className="form-input-container relative"
        onFocus={() => setShowPassword("block")}
        onBlur={() => setShowPassword("hidden")}
        tabIndex={-1}
      >
        <label htmlFor="password">Password</label>
        <input
          type={`${toggleIcon ? "text" : "password"}`}
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div
          className={`eye-icon-container ${showPassword}`}
          onClick={toggleEyeIcon}
        >
          <span className="eye-icon block">
            <FontAwesomeIcon icon={toggleIcon ? faEye : faEyeSlash} />
          </span>
        </div>
      </div>
      <p className="bottom-msg text-xs text-end">
        <a href="#" className="text-(--primary-color)">
          Forgot password?
        </a>
      </p>
    </>
  );
};

export default Login;
