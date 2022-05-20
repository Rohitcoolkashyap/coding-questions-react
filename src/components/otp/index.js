import React, { useEffect, useState } from "react";
import "./index.css";
import Input from "./Input";
export default function Otp() {
  const [noOfInputs, setNoOfInputs] = useState([1, 2, 3, 4]);
  const [otp, setOtp] = useState(Array(noOfInputs.length).fill(""));
  const [activeInput, setActiveInput] = useState("");

  useEffect(() => {
    for (let i = 0; i < otp.length; i++) {
      if (otp[i] == "") {
        setActiveInput(i);
        return;
      }
    }
  }, [otp]);
  // soumendu@toddleapp.com

  const submitOtp = () => {
    if (otp.length < 4) {
      alert("Enter complete OTP");
    } else {
      alert(otp.join(" "));
    }
  };
  return (
    <div className="otp">
      <div className="otp-container">
        <form>
          <h1 className="otp-title">Enter receive code</h1>
          <div className="otp-input-boxes d-flex">
            {noOfInputs.map((i, index) => (
              <Input
                key={index}
                otp={otp}
                setOtp={setOtp}
                index={index}
                plac
                activeInput={activeInput}
                tabIndex={(index + 1).toString()}
              />
            ))}
          </div>
          <div className="otp-btn-group">
            <button
              onClick={() => setOtp([])}
              className="btn margin-top--large"
            >
              Clear
            </button>
            <button onClick={submitOtp} className="btn margin-top--large">
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
