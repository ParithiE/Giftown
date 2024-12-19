import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UserAuthView from "./UserAuthView.tsx";
import SignInForm from "./SignIn";
import OtpAuthView from "./OtpAuthView.tsx";

const AuthModal = () => {
  const [show, setShow] = useState(true);
  const [activeTab, setActiveTab] = useState("signup"); // 'signin' or 'signup'

  // Modal open/close handlers
  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  // Toggle between SignIn and SignUp
  const switchTab = (tab) => setActiveTab(tab);

  return (
    <>
      {/* Trigger Button */}
      {/* <Button variant="primary" onClick={handleShow}>
        Open Auth Modal
      </Button> */}

      {/* Modal Component */}
      <Modal show={show} onHide={handleClose} centered  backdrop="static" // Prevents closing on background click
        keyboard={false}  // Prevents closing on ESC key press
>
        <Modal.Header closeButton>
          <Modal.Title>{activeTab === "signin" ? "Sign In" : "Sign Up"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Render Forms Conditionally */}
          {activeTab === "signin" ? <UserAuthView  setShow = {setShow} login = {true}/> : activeTab === "signup" ? 
          <UserAuthView setShow = {setShow} register = {true}/> : <OtpAuthView otp = {true}/>}
        </Modal.Body>

        <Modal.Footer>
          {activeTab === "signin" ? (
            <p>
              Don't have an account?{" "}
              <Button variant="link" onClick={() => switchTab("signup")}>
               Register
              </Button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Button variant="link" onClick={() => switchTab("signin")}>
               Login
              </Button>
            </p>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AuthModal;
