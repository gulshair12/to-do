import React from "react";

const styles = {
  primary:
    "bg-black text-white rounded-full py-2 px-4 w-full focus:outline-none focus:shadow-outline ",
  secondary: "text-white bg-black rounded-full text-sm px-2 py-2 w-2/5",
  simple: "text-sm px-2 py-2 w-2/5",
  sidebar_button: "flex py-4 pl-16 w-full rounded-e-full font-bold text-lg text-center hover:text-white hover:bg-black active:bg-black active:text-white transition duration-400",
  logout_button: "flex ml-8 mb-8 text-black font-bold text-lg items-center"
};

export default function Button({
  classname,
  style = "primary",
  onClick,
  type,
  ...props
}) {
  return (
    <button
      className={`
    ${styles[style]}
`}
      onClick={onClick}
      type={type}
      {...props}
    />
  );
}
