# ⚛️React Projesinin Adım Adım İşleyişi

Bu proje, kullanıcıya birkaç farklı kursu listeleyen basit ama öğretici bir kurs tanıtım uygulamasıdır. Hadi birlikte nasıl çalıştığına bakalım! 👇

## 1️⃣ App.js - Ana Bileşen

📂 Bu dosya **uygulamanın başlangıç noktası**.

**🔧 İşleyiş:**

```jsx
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
```

🔍 **Neler oluyor?**

- 🧩 `<Header />` → Başlık bileşenini ekrana getiriyor.

- 📦 `courses?.map(...)` → `courses` dizisini dönüyor ve her bir kurs için `<Course />` bileşenini render ediyor.

- ❓ `?.` → **Optional Chaining** sayesinde `courses` undefined/null olsa bile hata vermez 🙌

---

## 2️⃣ data.js - Kurs Verileri 📊

Bu dosyada her bir kursun bilgileri bir dizi içinde tanımlanmış.

```js
export const courses = [
  {
    id: 1244,
    title: "C# Programlama Dili",
    ...
  },
  ...
];

```

📸 Her kursun:

- Başlığı

- Açıklaması

- Fiyatı

- Görseli

- Linki

tanımlanmış.

- Görseller `import` ile çağrılmış:

```js
import Csharp from "./images/csharp.png";
```

---

## 3️⃣ Header.js - Başlık Bileşeni

```jsx
function Header() {
  return (
    <div className="header">
      <span className="title"> KURSLAR</span>
      <span>ALPER BİLGİN</span>
    </div>
  );
}
```

Bu bileşen sadece sayfanın en üstünde görünen başlığı içeriyor.

---

## 4️⃣ `Course.js` - Kurs Kartı Bileşeni 🧾

Her bir kurs için ayrı ayrı bu bileşen render edilir:

```jsx
function Course({ course }) {
  const { id, title, description, price, link, image } = course;
  return (
    <div className="course">
      <img src={image} width={240} height={150} />
      <h4 className="course-title">{title}</h4>
      <p className="course-desc">{description}</p>
      <h3 className="course-price">{price} ₺</h3>
      <div className="course-link">
        <a href={link}>Satın almak için tıklayınız</a>
      </div>
    </div>
  );
}
```

🧩 **Props** kullanılarak dışarıdan gelen `course` nesnesi parçalanır ve ekrana görsel, başlık, açıklama, fiyat ve bağlantı olarak yerleştirilir.

---

## 🔁 Genel Akış:

1.  🧠 React ilk çalıştığında `App.js` render edilir.

2.  🏷 `App.js` içinde önce `Header`, sonra `courses` dizisi dönülerek her kurs için `Course` bileşeni gösterilir.

3.  📋 Her kurs bileşeni, dışarıdan aldığı verilerle kendi içeriğini oluşturur.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
