import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const LoginRegisterPage = () => {
  return (
    <div className="login-register-container bg-(--primary-color)">
      <div className="bg-white">
        <div className="text-white bg-(--primary-color) rounded-bl-3xl px-6 py-7 flex justify-between">
          <div>
            <h1 className="font-semibold text-3xl mb-2">Registration</h1>
            <p className="text-sm">
              Your financial clarity starts with a single step
            </p>
          </div>
          <div className="w-15 h-15">
            <img className="w-full h-full" src="../assets/logo.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-(--primary-color)">
        <div className="bg-white rounded-tr-3xl px-6 py-8 flex flex-col gap-4">
          <div className="py-4">
            <p className="mb-2">Register with just one step</p>
            <div className="social-media-container flex gap-6 justity-center">
              <FontAwesomeIcon icon={faGoogle} className="social-media-icon"/>
              <FontAwesomeIcon icon={faFacebookF} className="social-media-icon"/>
              <FontAwesomeIcon icon={faXTwitter} className="social-media-icon"/>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p>Or register with E-mail</p>
            <form action="" className="login-form flex flex-col gap-4">
                <Login />
                <Register />
            </form>
            <button className="uppercase text-lg text-white bg-(--primary-color) tracking-wider font-semibold py-3 w-full rounded-xl">
                sign up
            </button>
            <p className="bottom-msg text-center">Already have an account? <a href="#" className="text-(--primary-color)">Log in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
