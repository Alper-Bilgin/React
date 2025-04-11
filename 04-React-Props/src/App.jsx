import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product";
import Container from "./Container";

function App() {
  const [count, setCount] = useState(0);

  const ProductName = "Kolye";
  let Price = 1299;

  return (
    <>
      <div>Alper</div>

      <Product productName="Ayakkabı" price={2999} />
      <hr />
      <Product productName="Bileklik" price={999} />
      <hr />
      <Product productName={ProductName} price={Price} />
      <hr />
      <hr />
      <Container>
        <Product productName="Container" price="Container" />
      </Container>
    </>
  );
}

export default App;
