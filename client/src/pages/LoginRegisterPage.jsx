import Login from "../components/Login";
import axios from 'axios';
import Register from "../components/Register";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import loginImage from "../assets/11669054_20943670.svg";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, loginUser } from "../api/registerService";
import { useState } from "react";
import { resetRegister } from "../redux/registerSlice";
import SuccessMsg from "../components/SuccessMsg";


const LoginRegisterPage = ({ authMode, setAuthMode, success }) => {
  const [response, setResponse] = useState('');
  const [showSuccess, setShowSuccess] = useState('');
  const[isMatch, setIsMatch] = useState({
      fullName : '',
      email : '',
      password : '',
      confirmPassword : [],
    });
  const navigate = useNavigate();
  const navigateTo = (mode) => {
    setAuthMode(mode);
    navigate(`/${mode}`);
  };
  const {fullName, email, password, confirmPassword} = useSelector(state => state.register);
  const dispatch = useDispatch();

  const handleValidation = ()=>{
    setIsMatch({
      fullName : fullName == '',
      email : email == '',
      password : password == '',
      confirmPassword : [
        confirmPassword == '',
        confirmPassword !== '' && password !== '' && confirmPassword !== password,
      ],
    });
  }

  const handleSubmit = async (e)=>{
    handleValidation();
    try{
      if(authMode == 'register'){
        let result = await addNewUser({fullName, email, password});
        setResponse(result);
        if(response?.data?.success){
          navigate('/register/success');
          setAuthMode('login');
          dispatch(resetRegister());
        }
      } else if( authMode == 'login'){
        let result = await loginUser({email, password});
        setResponse(result);
        if(response?.data?.success){
          navigate('/dashboard');
          dispatch(resetRegister());
        }
      }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <section className="login-register-container bg-(--primary-color) lg:bg-white lg:flex lg:rounded-3xl lg:p-6 max-w-[60rem] h-screen mx-auto">
      <div className="lg:bg-white lg:flex lg:rounded-3xl w-full">
        <section className="hidden lg:flex w-1/2 rounded-tl-3xl rounded-bl-3xl overflow-hidden flex-col justify-center items-center gap-4">
          <h1 className="text-5xl capitalize text-center text-(--primary-color)">expense tracker</h1>
          <p className="bg-(--primary-color) text-white text-2xl capitalize text-center py-3 px-4 inline-block w-fit">track smarter. spend smarter</p>
          <div className="w-[70%]">
            <img src={loginImage} alt="" className="w-full h-full" />
          </div>
        </section>
        {
          !success &&
          <section className="lg:w-1/2 flex flex-col items-center lg:rounded-3xl overflow-hidden h-screen lg:h-auto shadow-lg border-(--primary-color) ">
          <div className="bg-white w-full">
            <div className="text-white bg-(--primary-color) rounded-bl-3xl px-6 py-8 flex justify-between">
              <div>
                <h1 className="font-semibold capitalize text-3xl mb-2">
                  {authMode}
                </h1>
                <p className="text-sm">
                  Your financial clarity starts with a single step
                </p>
              </div>
              <div
                className="w-15 h-15 cursor-pointer"
                onClick={() => navigateTo("")}
              >
                <img className="w-full h-full turn-white" src={logo} alt="" />
              </div>
            </div>
          </div>
          <div className="form-section-container bg-(--primary-color) w-full flex-1">
            <div className="bg-white rounded-tr-3xl px-6 py-6 flex flex-col gap-4 h-full">
              <div className="flex flex-col gap-4">
                <form action="" className="login-form flex flex-col gap-4">
                  {(authMode === "login" && <Login />) ||
                    (authMode === "register" && <Register isMatch={isMatch} />)}
                </form>
                <button onClick={handleSubmit} className="primary-btn">
                  {authMode == "login" ? "Sign In" : "Sign Up"}
                </button>
                {authMode != "login" && (
                  <p className="bottom-msg text-center">
                    Already have an account?{" "}
                    <span
                      onClick={() => navigateTo("login")}
                      className="cursor-pointer text-(--primary-color)"
                    >
                      Log In
                    </span>
                  </p>
                )}
                {authMode == "login" && (
                  <p className="bottom-msg text-center">
                    You don't have an account?{" "}
                    <span
                      onClick={() => navigateTo("register")}
                      className="cursor-pointer text-(--primary-color)"
                    >
                      Sign Up
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
        }
        {
          success &&
          <section className="lg:w-1/2 flex flex-col items-center lg:rounded-3xl overflow-hidden h-screen lg:h-auto shadow-lg border-(--primary-color)">
            <SuccessMsg />
          </section>
        }
      </div>
    </section>
  );
};

export default LoginRegisterPage;
