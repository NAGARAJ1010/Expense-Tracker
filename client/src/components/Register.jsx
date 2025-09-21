import '../css/login.css';
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegisterField } from '../redux/registerSlice';
const Register = ({isMatch}) => {
  const [showPassword, setShowPassword] = useState('hidden');
  const [showConPassword, setShowConPassword] = useState('hidden');
  const [togglePasswordIcon, setTogglePasswordIcon] = useState(false);
  const [toggleConPasswordIcon, setToggleConPasswordIcon] = useState(false);

  const dispatch = useDispatch();
  const {fullName, email, password, confirmPassword} = useSelector(store=> store.register);
  const handleChange = (e) =>{
    const {name, value} = e.target;
    dispatch(setRegisterField({field:name, value}));
  }
  return (
    <>
      <span>
        <div className={`form-input-container ${!fullName && isMatch.fullName ? 'error':''}`}>
          <label htmlFor="name">Full name</label>
          <input type="text" name='fullName' value={fullName} id="name" onChange={handleChange}/>
        </div>
        {!fullName && isMatch.fullName && <p className='error-msg'>Full Name required!</p>}
      </span>
      <span>
        <div className={`form-input-container ${!email &&isMatch.email ? 'error':''}`}>
          <label htmlFor="email">E-mail</label>
          <input type="text" name='email' value={email} id="email" onChange={handleChange} />
        </div>
        {!email &&isMatch.email && <p className='error-msg'>Email required!</p>}
      </span>
      <span>
        <div className={`form-input-container register ${!password &&isMatch.password ? 'error':''}`}>
          <label htmlFor="password">Password</label>
          <div
            className="relative"
            onFocus={() => setShowPassword("block")}
            onBlur={() => setShowPassword("hidden")}
            tabIndex={-1}
          >
            <input
              type={`${togglePasswordIcon ? "text" : "password"}`}
              id="password"
              name='password'
              value={password}
              onChange={handleChange}
            />
            <div
              className={`eye-icon-container ${showPassword}`}
              onClick={() => setTogglePasswordIcon((prev) => !prev)}
            >
              <span className="eye-icon block">
                <FontAwesomeIcon icon={togglePasswordIcon ? faEye : faEyeSlash} />
              </span>
            </div>
          </div>
        </div>
        {!password &&isMatch.password && <p className='error-msg'>Password required!</p>}
      </span>
      <span>
        <div className={`form-input-container register ${(!confirmPassword && isMatch.confirmPassword[0]) || isMatch.confirmPassword[1] ? 'error' : ''}`}>
          <label htmlFor="confirm-password">Confirm password</label>
          <div
            className="relative"
            onFocus={() => setShowConPassword("block")}
            onBlur={() => setShowConPassword("hidden")}
            tabIndex={-1}
          >
            <input
              type={`${toggleConPasswordIcon ? "text" : "password"}`}
              id="confirm-password"
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
            />
            <div
              className={`eye-icon-container ${showConPassword}`}
              onClick={() => setToggleConPasswordIcon((prev) => !prev)}
            >
              <span className="eye-icon block">
                <FontAwesomeIcon
                  icon={toggleConPasswordIcon ? faEye : faEyeSlash}
                />
              </span>
            </div>
        </div>
      </div>
      {!confirmPassword && isMatch.confirmPassword[0] && <p className='error-msg'>Confirm Password required.</p>}
      {isMatch.confirmPassword[1] && <p className='error-msg'>Password do not match.</p>}
      </span>
    </>
  );
}

export default Register