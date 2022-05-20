import React, { useRef } from "react";

export default function Input({ setOtp, otp, index, activeInput, tabIndex }) {
  const inputRef = useRef(null);
  const handleChange = (e) => {
    console.log("hnnn");
    if (index > 0) {
      for (let i = 0; i < otp.length; i++) {
        if (otp[i] == "") {
          //   otp[i] = e.target.value;
          setOtp(
            otp.map((o, index) => {
              if (i == index) {
                return e.target.value;
              } else return o;
            })
          );
          return;
        }
      }
    }
    setOtp(
      otp.map((o, i) => {
        if (i == index) {
          return e.target.value;
        } else return o;
      })
    );
  };

  // const focusToNext = () => {
  //   // console.log(inputRef);
  // };
  // const handleFocus = (e) => {
  //   // console.log(otp[activeInput - 1]);

  //   if (otp[activeInput - 1]) focusToNext();
  // };

  // const handleKeyDown = (e) => {
  //   const pressedKey = e.key;
  //   console.log(otp[activeInput - 1]);

  //   switch (pressedKey) {
  //     case "Backspace":
  //     case "Delete": {
  //       e.preventDefault();
  //       if (otp[activeInput - 1]) {
  //         // changeCodeAtFocus('');
  //       } else {
  //         // focusPrevInput();
  //       }
  //       break;
  //     }
  //     default:
  //       break;
  //   }
  // };

  // NET

  // const handleChange = (value1, e) => {
  //   console.log(index);
  //   otp[index] = e.target.value;
  //   setOtp(otp);
  // };

  const inputfocus = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      console.log(e.target.tabIndex, e.target.value);
      console.log(e.target.form.elements);
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = e.target.tabIndex;
      if (next < 5 && e.target.value) {
        e.target.form.elements[next].focus();
      }
    }
  };
  console.log(otp);
  return (
    <div className="input">
      <input
        type="text"
        placeholder="0"
        className="inputStyle text-align-center "
        maxLength="1"
        value={otp && otp[index]}
        onChange={handleChange}
        // onFocus={handleFocus}
        // onKeyDown={handleKeyDown}
        // onKeyPress={this.keyPressed}
        onKeyUp={(e) => inputfocus(e)}
        ref={inputRef}
        tabIndex={tabIndex}
      />
    </div>
  );
}
