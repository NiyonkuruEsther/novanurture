const Button = ({ title, styles }) => {
  return (
    <button
      className={`rounded-xl px-10 py-3 text-base ${styles} ${
        styles.includes !== "bg-lightGreen" && ` text-white`
      } `}
    >
      {title}
    </button>
  );
};

export default Button;
