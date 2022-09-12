import { ethers } from "ethers";
export const parseAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;
};

export const parseErrorMsg = (code) => {
  switch (code) {
    case "INSUFFICIENT_FUNDS":
      return "No tienes suficientes fondos :c";
    case 4001:
      return "se canceló la transacción";
    default:
      return "tu vieja";
  }
};

export const parseTokens = (numberTokens) => {
  if (isNaN(Number(numberTokens)) || numberTokens === "") {
    return numberTokens;
  }
  return ethers.utils.parseEther(numberTokens);
};

export const parseSizeToNumber = (size) => {
  switch (size) {
    case "tiny":
      return 20;
    case "small":
      return 40;
    case "medium":
      return 60;
    case "big":
      return 80;
    case "superBig":
      return 100;
    default:
      return 20;
  }
};
