import React from 'react'
import OtpForm from '../../components/account/OtpForm.tsx';

export default function OtpAuthView({setShow, phoneNumber}) {

    const handleOtpSubmit = (values) => {
    //   setShow(false);
    alert("otp verified = :" 
    )
    };
  
    return (
      <div>
        <h3>Verify OTP</h3>
        <p>We've sent an OTP to: {phoneNumber}</p>
        <OtpForm onSubmit = {handleOtpSubmit}/>
      </div>
    );
  
}
