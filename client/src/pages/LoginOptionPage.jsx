import React from "react";

const LoginOptionPage = () => {
  return (
    <section className="bg-(--primary-color) px-6 flex flex-col items-center justify-center gap-18 h-dvh">
      <div className="w-30 h-30 bg-white">
        <img src="../assets/logo.png" alt="" className="w-full h-full" />
      </div>
      <h1 className="capitalize text-white text-4xl text-center">
        track smarter.
        <br /> spend better
      </h1>
      <div className="mx-auto font-medium text-white text-lg tracking-wide text-center w-full flex flex-col gap-6">
        <a href="" className="login-btn sign-btn bg-white text-(--primary-color) border-2 border-white">sign up</a>
        <a href="" className="login-btn log-btn bg-(--primary-color) border-2">log in</a>
      </div>
    </section>
  );
};

export default LoginOptionPage;
