import React, { lazy, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../utils/ApiService.ts";
import { REGISTER,  } from "../../constants/apiConstants.ts";
import SignInForm from "../../components/account/SignInForm.jsx";
import OtpAuthView from "./OtpAuthView.tsx";

// Lazy loading for better performance
const SignUpForm = lazy(() => import("../../components/account/SignUpForm.jsx"));

// TypeScript Types for Props
interface UserAuthViewProps {
  setShow?: (show: boolean) => void;
  register?: boolean;
  login?: boolean;
}

const UserAuthView: FC<UserAuthViewProps> = ({ setShow = () => {}, register = false, login = false }) => {
  const [showOtpView, setShowOtpView] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  // Register User Handler
  const handleRegister = async (values: { username: string; password: string; phoneNumber: string }) => {
    try {
      const { data } = await ApiService.post(REGISTER, {
        username: values.username,
        password: values.password,
        phoneNumber: values.phoneNumber,
      });

      if (data) {
        
      }
    } catch (error: any) {
      console.error("Registration Error:", error.message);
      alert("Failed to register. Please try again.");
    }
  };

  // Login User Handler
  const handleLogin = async (values: { username: string; password: string }) => {
    // try {
    //   const { data } = await ApiService.post(LOGIN, {
    //     username: values.username,
    //     password: values.password,
    //   });

    //   if (data) {
    //     // Handle post-login actions here
    //     alert("Login successful!");
    //   }
    // } catch (error: any) {
    //   console.error("Login Error:", error.message);
    //   alert("Failed to login. Please check your credentials.");
    // }
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
