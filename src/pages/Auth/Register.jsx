import React from "react";
import GirlOnCloud from "../../assets/girlOnCloud.png";
import Button from "../../components/Button";

const Register = () => {
  return (
    <div className={`max-w-screen max-h-screen`}>
      <img
        src={GirlOnCloud}
        alt=""
        className="w-screen h-screen object-center "
      />
      <form
        className="absolute top-[15vh] right-[12vw] h-[70vh] w-[25vw] bg-white bg-opacity-[.06] rounded-2xl text-white px-10 py-5 flex flex-col gap-10"
        action=""
      >
        <div className="flex flex-col gap-2">
          <h1 className="m-0 text-xl font-semibold">Login</h1>
          <p className="font-thin">Welcome onboard with us!</p>
        </div>

        <div className="flex flex-col gap-4">
          <p>Username</p>
          <input
            type="text"
            placeholder="Enter your username"
            className="bg-transparent border border-gray-200 rounded-xl px-2 py-3 w-full placeholder:text-gray-300 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>Email</p>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent border border-gray-200 rounded-xl px-2 py-3 w-full placeholder:text-gray-300 focus:outline-none"
            />
            <p className="text-end pt-2 font-thin">Forgot password?</p>
          </div>
        </div>
        <div>
          <Button title="LOGIN" styles="bg-lightGreen font-semibold w-full" />
          <p className="text-center pt-2">
            New to here? <span className="font-semibold">Register</span> Here
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
