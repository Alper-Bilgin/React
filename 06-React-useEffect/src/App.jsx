import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır");
  });

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır.");
  }, []);

  useEffect(() => {
    console.log(
      "ilk render edildiğinde ve FİRSTNAME veya LASTNAME state değerlerinde değişiklik olduğunda çalışır."
    );
  }, [firstName, lastName]);

  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Alper")}>Adı Değiştir</button>
      </div>
      <div>
        <button onClick={() => setLastName("Bilgin")}>Soyismi Değiştir</button>
      </div>
    </div>
  );
}

export default App;
