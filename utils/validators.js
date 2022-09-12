export const isEmpty = (value) => {
  return value.length === 0 ? "Please insert something" : "";
};

export const isBadAdress = (value) => {
  const invalidStart = value.slice(0, 2) !== "0x";
  const invalidHexValue = isNaN(Number(value));
  const invalidLength = value.length !== 42;
  if (invalidStart) {
    return 'Invalid start address, it needs to start with "0x"';
  } else if (invalidHexValue) {
    return "Invalid format address";
  } else if (invalidLength) {
    return 'Invalid address length, it needs to be 42 characters including "0x"';
  }
  return "";
};

export const isNegative = (value) => {
  return Number(value) <= 0 ? "Please, enter positive values" : "";
};

export const isNotNumber = (value) => {
  return isNaN(Number(value)) ? "Please insert a number" : "";
};
