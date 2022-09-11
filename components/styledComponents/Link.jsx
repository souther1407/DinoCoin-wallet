import React from "react";
import NextLink from "next/link";

const Link = ({ to, children, extern }) => {
  if (extern) return <a href={to}>{children}</a>;
  return <NextLink href={to}>{children}</NextLink>;
};

export default Link;
