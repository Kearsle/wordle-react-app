import "./FormInput.css";
import { useState } from "react";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  let errorMessageSpan;
  if (errorMessage) {
    errorMessageSpan = <span>{errorMessage}</span>;
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      {errorMessageSpan}
    </div>
  );
}

export default FormInput;
