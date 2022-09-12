export const isElementEmpty = (obj) => {
  for (let e in obj) {
    if (!obj[e]) {
      return true;
    }
  }
  return false;
};
