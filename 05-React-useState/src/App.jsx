import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // String tckn ="12312312123"
  // String firstName="Alper"

  // useState : hooks
  // değişken ismi  değişkeni güncelleme fonk. başlangıç parametresi
  const [firstName, setFirstName] = useState("Alper");
  const [lastName, setLastName] = useState("Bilgin");
  const [names, setNames] = useState(["Alper", "Enes", "Berke", "Ali"]);
  const [userInfo, setUserInfo] = useState({
    username: "dreaxs",
    password: "qwert",
  });

  console.log(names);

  const handleChange = () => {
    setFirstName("ENES");
  };

  //useState : Bir state'in değerini set metodunu kullanarak değiştirdiğinde componenet yeniden render edilir.

  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  console.log("component render edildi");

  return (
    <>
      <div>
        <div> {count}</div>
        <div>
          <button onClick={arttir}>Arttır</button>
        </div>
        <div>
          <button onClick={azalt}>Azalt</button>
        </div>
      </div>
      <br />
      <hr />
      <hr />
      <div>{firstName}</div>
      <div>{lastName}</div>
      <hr />
      <button
        onClick={() => {
          setLastName("Bayram");
        }}
      >
        Soyadı Değiştir
      </button>
      <button
        onClick={
          //   () => {
          //   setFirstName("ENES");
          // }

          handleChange
        }
      >
        İsmi Değiştir
      </button>
      <hr />
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <div>
        {userInfo.username}
        <br />
        {userInfo.password}
      </div>
    </>
  );
}

export default App;
