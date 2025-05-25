import { useState, useEffect } from "react";

function ButtonDarkTheme() {
  const [isDarkTheme, setIsDarktheme] = useState(false);

  const onClick = () => {
    setIsDarktheme((prev) => !prev);
  };
  useEffect(() => {
    isDarkTheme
      ? (document.body.style = "background: #0f0e17; color: #fff")
      : (document.body.style = "background: #fff; color: black");
  }, [isDarkTheme]);
  return (
    <>
      <button onClick={onClick}>
        ControlledButton:
        {isDarkTheme ? "Light Theme" : "Dark Theme"}
      </button>
    </>
  );
}

export default ButtonDarkTheme;
