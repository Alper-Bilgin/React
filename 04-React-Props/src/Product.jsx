import React from "react";
// props olarak gelen bilgileri yakalar
// function Product(props)
function Product(props) {
  const { productName, price } = props;

  console.log(props);
  return (
    <div>
      <br />
      <br />
      <div>Ürün Bilgileri</div>

      <div>
        <div>İsim : {productName}</div>
        <div>Fiyat : {price} TL</div>
      </div>
    </div>
  );
}

export default Product;
