import React from "react";

// Children değilde başka bir şey yazıldığında hata verilecek
// Objenin ismi children
// parent Container.jsx
// child  Product.jsx
function Container({ children }) {
  console.log({ children });
  return (
    <div>
      <div>Container</div>
      {children}
    </div>
  );
}

export default Container;
