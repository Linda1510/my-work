type InputProps = {
  rounded?: boolean;
  label?: string;
  validation?: string;
};

const Input = ({ rounded, label, validation }: InputProps) => {
  return (
    <>
      {label ? <label htmlFor={label}>{label}</label> : ""}

      <input
        id={label}
        className={` input ${rounded ? "input--rounded" : ""}`}
        type="text"
      />
      {validation ? <h1>{validation}</h1> : ""}
    </>
  );
};

export default Input;
