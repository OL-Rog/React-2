import { useState, useEffect } from "react";

function ButtonDarkTheme() {
  const [isDarkTheme, setIsDarktheme] = useState(false);

  const onClick = () => {
    setIsDarktheme((prev) => !prev);
  };
  return (
    <>
      <button onClick={onClick}>
        {isDarkTheme ? "Light Theme" : "Dark Theme"}
      </button>
    </>
  );
}

export default ButtonDarkTheme;
// Був задум, але не придумав поки як змінювати фон елементу document.body, так, щоб React це рендерив, використовуючи useState)
