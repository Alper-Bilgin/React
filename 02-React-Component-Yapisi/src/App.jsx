import { useState } from "react";
import "./App.css";

// export default isim farklı olabilir
import Login from "./Login";
// export aynı isim olmak zorunda
import { users } from "./Login";

function App() {
  const [count, setCount] = useState(0);
  console.log(users);

  return (
    <>
      <div>Alper</div>
      <div>Bilgin</div>
      <Login />
      <hr />
      <Login />
    </>
  );
}

export default App;
// export default komple componenti döndürür
