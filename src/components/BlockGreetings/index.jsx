import { useState } from "react";
import GreetingElement from "./GreetingElement";
import TypeName from "./TypeName";

const BlockGreetings = () => {
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <TypeName onChange={onChange} />
      <br />
      <GreetingElement name={name} />
    </>
  );
};

export default BlockGreetings;
