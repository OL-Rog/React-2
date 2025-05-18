import { useState } from "react";
import GreetingElement from "./GreetingElement";
import TypeName from "./TypeName";
import GreetingElementByClasses from "./GreetingElementByClasses";

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
      <GreetingElementByClasses name={name} />
    </>
  );
};

export default BlockGreetings;
