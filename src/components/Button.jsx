const Button = ({ title, styles }) => {
  return (
    <button
      className={`rounded-xl px-10 py-3 text-base text-white ${styles} ${
        styles.includes !== "bg-lightGreen" && ` text-black`
      } `}
    >
      {title}
    </button>
  );
};

export default Button;
