import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-xs">
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex items-center justify-center font-bold text-3xl mb-10">
              Log In
            </div>
            <div className="mb-4">
              <Input id="Email" type="text" placeholder="Email" />
            </div>
            <div className="mb-6 relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <span
                onClick={toggleShowPassword}
                className="absolute top-0 right-0 pr-3 pb-3 h-full flex items-center font-bold"
                type="button"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <Link to="/task" className="w-full">
                <Button type="button">Log In</Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
