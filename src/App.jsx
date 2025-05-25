import { useEffect, useState } from "react";
import ButtonDarkTheme from "./components/ButtonDarkTheme";
import UncontrolledInput from "./components/UncontrolledInput";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser((prev) => [...prev, data]); // Зберігаємо отримані дані в стані
      });
  }, []);
  return (
    <>
      <UncontrolledInput />
      <ButtonDarkTheme />
      <ul>
        {users.map((item, index) => {
          return (
            <>
              <li key={item + index + "a"}>Name: {item.name}</li>
              <li key={item + index + "b"}>Phone: {item.phone}</li>
              <li key={item + index + "c"}>Username: {item.username}</li>
              <hr />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default App;
