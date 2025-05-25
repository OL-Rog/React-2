import { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef(null);
  const onChange = () => {
    alert(inputRef.current.value);
  };
  return (
    <input
      ref={inputRef}
      onChange={onChange}
      placeholder="UncontrolledElement"
    ></input>
  );
};

export default UncontrolledInput;
