import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UserAuthView from "./UserAuthView.tsx";
import OtpAuthView from "./OtpAuthView.tsx";
import { useLocation } from "react-router-dom";

// Component Definition
const AuthModal = () => {
  const [show, setShow] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"signin" | "signup" | "otp">("signin");
  const location = useLocation();
  const redirectTo = location.state?.from || "/";
  // Modal close handler
  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static" // Prevent closing on background click
      keyboard={false} // Prevent closing on ESC key press
    >
      {/* Modal Header */}
      <Modal.Header closeButton>
        <Modal.Title>
          {activeTab === "signin" ? "Sign In" : activeTab === "signup" ? "Sign Up" : "OTP Verification"}
        </Modal.Title>
      </Modal.Header>

      {/* Modal Body */}
      <Modal.Body>
        {activeTab === "signin" && (
          <UserAuthView setShow={setShow} login={true} setActiveTab={setActiveTab} redirectTo = {redirectTo} />
        )}
        {activeTab === "signup" && (
          <UserAuthView setShow={setShow} register={true} setActiveTab={setActiveTab} />
        )}
        {activeTab === "otp" && (
          <OtpAuthView setShow={setShow} setActiveTab={setActiveTab} />
        )}
      </Modal.Body>

      {/* Modal Footer */}
      <Modal.Footer>
        {activeTab === "signin" && (
          <p>
            Don't have an account?{" "}
            <Button variant="link" onClick={() => setActiveTab("signup")}>
              Register
            </Button>
          </p>
        )}
        {activeTab === "signup" && (
          <p>
            Already have an account?{" "}
            <Button variant="link" onClick={() => setActiveTab("signin")}>
              Login
            </Button>
          </p>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;
