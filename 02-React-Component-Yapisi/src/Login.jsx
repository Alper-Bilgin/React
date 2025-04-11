import React from "react";

// export kullanıldığı için function içinde kullanılmaz
export const users = [
  {
    username: "alper",
    password: "0",
  },
  {
    username: "enes",
    password: "1",
  },
];

function Login() {
  return (
    // Return ederken hepsi bir ana elemana bağlı olmak zorunda ya div ile ya fragment ile
    // Fragment: <> </>
    <div>
      <div>
        <p>Kullanıcı Adı: </p>
        <input type="text" />
        <br />
        <p>Şifreniz: </p>
        <input type="password" />
        <br />
      </div>
      <div>
        <button> Giriş Yap </button>{" "}
      </div>
    </div>
  );
}

export default Login;
