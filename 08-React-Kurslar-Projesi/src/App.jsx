import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { courses } from "./data";
import Course from "./Course";
import "./css/Course.css";
// ?.: Bu, optional chaining (isteğe bağlı zincirleme) operatörüdür. Eğer courses null ya da undefined ise, map fonksiyonu çağrılmaz ve hata oluşmaz. Yani, courses dizisi mevcutsa, içeriği işleme alınır, yoksa işlem yapılmaz.
function App() {
  return (
    <div>
      <Header />
      <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
