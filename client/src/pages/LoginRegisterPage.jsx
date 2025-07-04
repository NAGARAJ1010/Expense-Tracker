import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const LoginRegisterPage = ({ authMode, setAuthMode }) => {
  const navigate = useNavigate();
  const navigateTo = (mode) => {
    setAuthMode(mode);
    navigate(`/${mode}`);
  };
  return (
    <section className="login-register-container bg-(--primary-color) lg:bg-white lg:flex lg:rounded-3xl gap-6 max-w-[80rem] p-6 h-screen mx-auto">
      <section className="hidden lg:block w-1/2 rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="../assets/11669054_20943670.svg"
          alt=""
          className="w-full h-full"
        />
      </section>
      <section className="lg:w-1/2 flex flex-col lg:rounded-3xl overflow-hidden shadow-2xl">
        <div className="bg-white">
          <div className="text-white bg-(--primary-color) rounded-bl-3xl px-6 py-8 flex justify-between">
            <div>
              <h1 className="font-semibold capitalize text-3xl mb-2">
                {authMode}
              </h1>
              <p className="text-sm">
                Your financial clarity starts with a single step
              </p>
            </div>
            <div className="w-15 h-15 cursor-pointer" onClick={()=> navigateTo('')}>
              <img className="w-full h-full" src="../assets/logo.png" alt="" />
            </div>
          </div>
        </div>
        <div className="form-section-container bg-(--primary-color) flex-1">
          <div className="bg-white rounded-tr-3xl px-6 py-8 flex flex-col gap-4 h-full">
            <div className="py-4">
              <p className="mb-2 first-letter:uppercase">
                {authMode} with just one step
              </p>
              <div className="social-media-container flex justify-start gap-3">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="social-media-icon"
                />
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="social-media-icon"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="social-media-icon"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p>Or {authMode} with E-mail</p>
              <form action="" className="login-form flex flex-col gap-4">
                {(authMode === "login" && <Login />) ||
                  (authMode === "register" && <Register />)}
              </form>
              <button className="cursor-pointer uppercase text-md text-white bg-(--primary-color) tracking-wider font-medium py-3 w-full rounded-xl border-2 hover:border-(--primary-color) hover:bg-white hover:text-(--primary-color) transition-colors duration-300">
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
    </section>
  );
};

export default LoginRegisterPage;
