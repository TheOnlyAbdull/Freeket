function ButtonPrimary({ onClick, children, className, disabled, type }) {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      disabled={disabled}
      className={`block text-center disabled:bg-gray-300 disabled:text-gray-500 font-medium w-full bottom-0 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
