import { useState } from "react";

export const useValidate = (validators) => {
  const [error, setError] = useState("");
  const validate = (value) => {
    for (let validator of validators) {
      const errorMsg = validator(value);
      if (errorMsg) {
        setError(errorMsg);
        return;
      }
    }
    setError("");
  };
  return { error, validate };
};
