import React, { useEffect } from "react";
import styles from "../../styles/styledComponent/input.module.css";
import { useValidate } from "../../hooks/useValidate.js";
import Text from "./Text";

const Input = ({
  type = "text",
  label,
  id,
  onChange,
  onErrors,
  validators = [],
  ...otherProps
}) => {
  const { error, validate } = useValidate(validators);
  const handlerChange = (e) => {
    onChange(e.target.value);
    validate(e.target.value);
  };
  useEffect(() => {
    onErrors(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <label
        htmlFor={id}
        className={`${styles.label} ${error && styles.error}`}
      >
        <Text>{label}</Text>
      </label>
      <input
        className={`${styles.input} ${error && styles.error}`}
        type={type}
        id={id}
        {...otherProps}
        onChange={handlerChange}
        onFocus={handlerChange}
      />
      <p className={styles.errorMsg}>
        <Text>{error}</Text>
      </p>
    </div>
  );
};

export default Input;
