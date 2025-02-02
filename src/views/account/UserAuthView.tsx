import React, { lazy, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../utils/ApiService.ts";
import { LOGIN, REGISTER,  } from "../../constants/apiConstants.ts";
import SignInForm from "../../components/account/SignInForm.jsx";
import OtpAuthView from "./OtpAuthView.tsx";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/user/user-slice.ts";

// Lazy loading for better performance
const SignUpForm = lazy(() => import("../../components/account/SignUpForm.jsx"));

// TypeScript Props Interface
interface UserAuthViewProps {
  setShow?: (show: boolean) => void;
  setActiveTab?: (tab: "signin" | "signup" | "otp") => void;
  register?: boolean;
  login?: boolean;
  redirectTo?: string;
}

const UserAuthView: FC<UserAuthViewProps> = ({ setShow = () => {}, setActiveTab = () => {}, register = false, login = false, redirectTo = "" }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  // Register User Handler
   // Register Handler
   const handleRegister = async (values: { username: string; password: string; phoneNumber: string }) => {
    try {
      // Simulate API call
      // const { data } = await ApiService.post(REGISTER, values);

      // Navigate to OTP on successful registration
      setActiveTab("otp");
    } catch (error: any) {
      console.error("Registration Error:", error.message);
      alert("Failed to register. Please try again.");
    }}
  // Login User Handler
  const handleLogin = async (values: { mobileNo: number; password?: string }) => {
    try {
      if(values.password){
        const { data } = await ApiService.post(LOGIN, {
          phoneNumber: values.mobileNo,
          password: values.password,
        });
        if (data?.token) {
          // Store token in localStorage
          // dispatch(setUser(data));
            // Save to localStorage
          localStorage.setItem("user", JSON.stringify(data));
          setShow(false);
          navigate(redirectTo);
      }
    }
      else {
        setActiveTab("otp");
      }
      
    } catch (error: any) {
      console.error("Login Error:", error.message);
      alert("Failed to login. Please check your credentials.");
    }
  };

  // Render Component
  return (
    <div className="container my-3">
      <div className="row">
        {register && <SignUpForm onSubmit={handleRegister} />}
        {login && <SignInForm onSubmit={handleLogin} />}
      </div>
    </div>
  );
};

export default UserAuthView;
