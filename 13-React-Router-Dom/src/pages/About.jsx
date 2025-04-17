import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link style={{ marginRight: "10px" }} to="employee">
        Çalışanlar Hakkında
      </Link>
      <Link to="company">Şirket Hakkında</Link>
      <Outlet />
      {/* Bu komutu kullanmamızın nedeni parent içinde bulunan child ları listelemek için */}
    </div>
  );
}

export default About;
