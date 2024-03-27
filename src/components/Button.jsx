const Button = ({ title, bgColor }) => {
  return (
    <button
      className={`rounded-xl px-10 py-3 text-base ${bgColor} ${
        bgColor !== "lightGreen" && ` text-white`
      } `}
    >
      {title}
    </button>
  );
};

export default Button;
