# ⚛️ **React Router Dom**

## 🧱 1. Proje Oluşturma

İlk olarak bir React projesi oluşturalım.

```bash
npx create-react-app router-proje
cd router-proje
```

🛠️ Bu komut, `router-proje` adında bir React projesi oluşturur.

## 📦 2. react-router-do Kurulumu

Routing işlemleri için bu paketi kurmamız lazım.

```bash
npm install react-router-dom
```

📦 `react-router-dom`, React içinde sayfa yönlendirmelerini yönetmemizi sağlar.

## 🗂️ 3. Proje Klasör Yapısı

Daha düzenli bir yapı için klasörleri şöyle yapabiliriz:

```
src/
├── pages/
│   ├── Home.js
│   ├── About.js
│   └── Contact.js
├── App.js
└── index.js
```

## 🧾 4. Sayfa Bileşenlerini Oluşturma

**Home.jsx**

```jsx
// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return <h1>🏠 Anasayfa</h1>;
};

export default Home;
```

**About.jsx**

```jsx
// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return <h1>📞 İletişim</h1>;
};

export default Contact;
```

**Contact.jsx**

```jsx
// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return <h1>📞 İletişim</h1>;
};

export default Contact;
```

## 🧭 5. Router'ı Tanımlama (**App.js**)

```jsx
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">🏠 Anasayfa</Link>
          </li>
          <li>
            <Link to="/about">ℹ️ Hakkımızda</Link>
          </li>
          <li>
            <Link to="/contact">📞 İletişim</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
```

🔄 Açıklama:

- `<Router>`: Ana yönlendirme sarmalayıcısı.

- `<Routes>`: İçindeki her bir `<Route>` sayfayı temsil eder.

- `<Route path="/about" element={<About />} />`: `/about` URL'sinde `About` bileşenini gösterir.

- `<Link>`: Sayfalar arası geçiş butonları.

## 🎬 6. Uygulamanın Başlatılması

```bash
npm start
```

🌐 Tarayıcını aç ve şu URL’leri dene:

- `http://localhost:3000/` → 🏠 Anasayfa

- `http://localhost:3000/about` → ℹ️ Hakkımızda

- `http://localhost:3000/contact` → 📞 İletişim

---

# ❗ **Ek Bilgiler**

## 🧭 **404** Sayfası

```jsx
<Route path="*" element={<h1>🚫 Sayfa Bulunamadı</h1>} />
```

🔄 **Açıklama:**

- **`<Route />`**: React Router'da bir rota tanımlamak için kullanılır.

- **`path="*"`**: Bu ifade, tüm URL'lerle eşleşir ama daha önce tanımlanmış hiçbir route'a uymayanları yakalar. Yani bir **"catch-all"** rotadır. Başka bir deyişle, kullanıcının yazdığı URL uygulamadaki mevcut rotalardan hiçbirine uymuyorsa bu çalışır.

- **`element={<h1>🚫 Sayfa Bulunamadı</h1>}`**: Eşleşme durumunda gösterilecek olan React elementi. Bu örnekte, sayfada büyük başlıkla şu mesaj gösterilecek: "🚫 Sayfa Bulunamadı".

## 🔁 Redirect (Yönlendirme)

```jsx
import { Navigate } from "react-router-dom";
<Route path="/eski-hakkinda" element={<Navigate to="/about" />} />;
```

🔄 **Açıklama:**

- **`<Route path="/eski-hakkinda" />`**: Kullanıcı `/eski-hakkinda` URL’sine giderse bu route devreye girer.

- **`element={<Navigate to="/about" />}`**: Bu durumda kullanıcı otomatik olarak `/about` adresine yönlendirilir.

- **`<Navigate />`**: React Router v6'da bir sayfayı programlı olarak başka bir sayfaya yönlendirmek için kullanılan bileşen.

---

# 🔷 Layout (Genel Şablon)

Birçok sayfada tekrar eden yapılar olur — örneğin: üst menü, footer, vs.
Bunları bir `Layout` bileşeni içine alarak **tüm sayfalarda ortak** olarak gösterebiliriz.

**📁 Dosya Yapısı Güncellemesi**

```
src/
├── layout/
│   └── MainLayout.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   └── Contact.js
├── App.js
```

**🧱 Layout Bileşeni Oluşturma**

```jsx
// src/layout/MainLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">🏠 Anasayfa</Link>
          </li>
          <li>
            <Link to="/about">ℹ️ Hakkımızda</Link>
          </li>
          <li>
            <Link to="/contact">📞 İletişim</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <main>
        <Outlet /> {/* Alt rota burada gösterilecek */}
      </main>

      <footer>
        <p>© 2025 - Tüm Hakları Saklıdır</p>
      </footer>
    </>
  );
};

export default MainLayout;
```

## **📦 Outlet Nedir?**

`<Outlet />`, **iç içe (nested) route** yapılarında **alt rotaların (child routes)** hangi bileşeni göstereceğini belirlemek için bir **yer tutucu (placeholder)** görevi görür.

**🔗 App.js'te Layout'u Kullanma**

```jsx
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout içinde tanımlı sayfalar */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* 404 Sayfası */}
        <Route path="*" element={<h1>🚫 Sayfa Bulunamadı</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
```

### **📌 Açıklamalar:**

#### 1. **`<Router>`**

Bu, uygulamanın tümünü saran **router sağlayıcısı**. Tarayıcının adres çubuğunu dinler, değişiklikleri takip eder. React Router kullanırken bu mutlaka gerekir.

#### 2. **`<Routes>`**

React Router v6 ile geldi. Eski sürümlerde `<Switch>` kullanılırdı. Tüm `Route`'lar buraya yerleştirilir.

#### 3. **`<Route path="/" element={<MainLayout />}>`**

Bu çok önemli. Diyor ki:

**Ana yol (`/`) ya da onun alt yolları ziyaret edilirse, önce `MainLayout` çalışacak.**

**Altında tanımlı child route’lar, `MainLayout.js` içindeki `<Outlet />` bileşenine yerleşecek.**

**🔄 Sayfa Geçişleri:**

| URL                 | Ne Gösterilir?               |
| ------------------- | ---------------------------- |
| `/`                 | `MainLayout` + `<Home />`    |
| `/about`            | `MainLayout` + `<About />`   |
| `/contact`          | `MainLayout` + `<Contact />` |
| `/herhangi-bir-sey` | `🚫 Sayfa Bulunamadı` mesajı |

---

# **📍 Dinamik Rotalar (URL parametreleri)**

Örnek: `/kullanici/5` gibi URL’lerde **dinamik ID** ile veri çekmek isteriz.

**📄 Örnek Sayfa: User.jsx**

```jsx
// src/pages/User.jsx
import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>👤 Kullanıcı Sayfası</h1>
      <p>Kullanıcı ID: {id}</p>
    </div>
  );
};

export default User;
```

**🔍 Ne Yapıyor Bu Kod?**

- URL'de tanımlı olan `:id` parametresini alır.

- Yani eğer kullanıcı `/user/42` gibi bir sayfaya giderse, `id` değişkeni `"42"` olur.

- Bu `id`'yi sayfada gösteriyorsun:

  > `Kullanıcı ID: 42`

## **🛣️ Route Tanımı**

```jsx
<Route path="user/:id" element={<User />} />
```

Bu tanım sayesinde `/user/123`, `/user/abc`, `/user/999` gibi tüm yollar `User` bileşenine yönlendirilir ve `:id` parametresi dinamik olarak alınır.

---

# **📥 URL'e Göre Veri Getirme (Axios)**

İçeride gelen `id`’ye göre veri çekme örneği:

```jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div>
      <h1>👤 Kullanıcı Detayı</h1>
      {user ? (
        <>
          <p>Ad: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
};

export default User;
```

### **📌 Açıklamalar:**

#### 🔹 import Satırları

- `React`, `useEffect`, `useState`: React'in temel yapı taşları.
- `useParams`: URL'den parametre (örneğin kullanıcı ID’si) almak için.
- `axios`: API’den veri çekmek için kullanılan kütüphane.

#### 🔹 const User = () => { ... }

Bu bir **fonksiyonel React bileşeni**. Tek bir kullanıcının bilgilerini göstermek için.

#### 🔹 const { id } = useParams();

- URL'deki `id` parametresini alır.
  Örnek: `/user/3` → `id = 3`

#### 🔹 const [user, setUser] = useState(null);

- Kullanıcı verilerini saklamak için bir state tanımlar.
- Başlangıçta `null` (veri henüz yok).

#### 🔹 useEffect(() => { ... }, [id]);

- Bileşen yüklendiğinde veya `id` değiştiğinde çalışır.
- İçeride API çağrısı yapılır:
  `https://jsonplaceholder.typicode.com/users/${id}`

#### 🔹 axios.get(...)

- Belirtilen API’den veri çeker.
- Başarılıysa: `setUser(response.data)` ile state güncellenir.

- Hata olursa: Konsola yazılır.

#### 🔹 return (...)

- Kullanıcı varsa: Ad ve e-posta gösterilir
- Kullanıcı yoksa: “Yükleniyor…” mesajı.

---

# **📌 Navigate (Programatik Yönlendirme)**

```jsx
import { useNavigate } from "react-router-dom";

const Example = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return <button onClick={handleClick}>Hakkımızda'ya Git</button>;
};
```

### **📌 Açıklamalar:**

#### 🔹 import { useNavigate } from "react-router-dom";

- `react-router-dom` kütüphanesinden `useNavigate` fonksiyonu içe aktarılır.
- Bu fonksiyon, sayfalar arasında **programatik olarak gezinmek (yönlendirmek)** için kullanılır.

#### 🔹 const Example = () => { ... }

- Bu bir React **fonksiyonel bileşenidir**.

#### 🔹 const navigate = useNavigate();

- `useNavigate` çağrılarak `navigate` adında bir fonksiyon elde edilir.
- Bu fonksiyonla kullanıcı, istediğimiz bir route’a (sayfaya) yönlendirilebilir.

#### 🔹 const handleClick = () => { navigate("/about"); };

- Bu fonksiyon tetiklendiğinde, kullanıcı `/about` sayfasına yönlendirilir.
- Yani: **Hakkımızda** sayfasına geçiş yapılır.

#### 🔹 return <button onClick={handleClick}>Hakkımızda'ya Git</button>;

- Ekrana bir buton basılır.
- Butona tıklanınca `handleClick` çalışır → `navigate("/about")` → yönlendirme gerçekleşir.

---

# **📂 İç İçe Rotalar (Nested Routes) Nedir?**

İç içe rotalar, bir sayfa içinde **alt sayfalara** veya **bölümlere** yönlendirmeler yapmamıza olanak tanır.
Mesela, bir **Profil Sayfası** içinde **Hakkında**, **Güncellemeler** ve **Ayarlar** gibi alt bölümler olabilir. Her bir bölümün farklı bir URL’si olur ama hepsi aynı sayfa yapısının içinde gösterilir.

**📁 Dosya Yapısı**

```
src/
├── pages/
│   ├── Profile.js
│   ├── ProfileAbout.js
│   ├── ProfileUpdates.js
│   └── ProfileSettings.js
├── App.js
└── index.js
```

## 🧱 Adım 1: Alt Sayfa Bileşenlerini Oluşturma

**Profile.jsx (Ana Profil Sayfası)**

```jsx
// src/pages/Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>👤 Profil Sayfası</h1>
      <nav>
        <ul>
          <li>
            <Link to="about">📄 Hakkında</Link>
          </li>
          <li>
            <Link to="updates">🔄 Güncellemeler</Link>
          </li>
          <li>
            <Link to="settings">⚙️ Ayarlar</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet /> {/* Burada alt sayfalar gösterilecek */}
    </div>
  );
};

export default Profile;
```

**🧠 `Outlet` burada, alt rotaların yerleştirileceği yeri belirler.**

**ProfileAbout.jsx**

```jsx
// src/pages/ProfileAbout.jsx
import React from "react";

const ProfileAbout = () => {
  return <h2>📄 Hakkında: Kullanıcı Hakkında Bilgiler</h2>;
};

export default ProfileAbout;
```

**ProfileUpdates.jsx**

```jsx
// src/pages/ProfileUpdates.jsx
import React from "react";

const ProfileUpdates = () => {
  return <h2>🔄 Güncellemeler: Profil Güncellemeleri</h2>;
};

export default ProfileUpdates;
```

**ProfileSettings.jsx**

```jsx
// src/pages/ProfileSettings.jsx
import React from "react";

const ProfileSettings = () => {
  return <h2>⚙️ Ayarlar: Profil Ayarları</h2>;
};

export default ProfileSettings;
```

## 🛣️ Adım 2: Rotaları Tanımlama

`App.js` içinde iç içe rotaları tanımlıyoruz.

```jsx
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import ProfileAbout from "./pages/ProfileAbout";
import ProfileUpdates from "./pages/ProfileUpdates";
import ProfileSettings from "./pages/ProfileSettings";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ana Profil sayfası */}
        <Route path="/profile" element={<Profile />}>
          {/* İç içe rotalar */}
          <Route path="about" element={<ProfileAbout />} />
          <Route path="updates" element={<ProfileUpdates />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* 404 Sayfası */}
        <Route path="*" element={<h1>🚫 Sayfa Bulunamadı</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
```

### **📌 Açıklamalar:**

#### 🔹 import React from "react";

- React kütüphanesi projeye dahil ediliyor.

#### 🔹 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

- **React Router**'ın gerekli bileşenleri import edilir:
  - `BrowserRouter as Router`: Sayfalar arasında gezinmeyi sağlayan Router bileşeni
  - `Routes`: Sayfaların tanımlandığı ve yönlendirildiği bileşen.
  - `Route`: Belirli bir yolda gösterilecek bileşenleri tanımlar.

#### 🔹 const App = () => { ... }

- Bu, **App** adlı fonksiyonel bir React bileşeni

#### 🔹 `<Router>`: Ana Yönlendirici

- Sayfalar arasında geçiş yapabilmek için tüm uygulama, `<Router>` bileşeni içinde sarılır.
- Bu, URL'yi yönetir ve yönlendirmeleri işler.

#### 🔹 <Routes>`: Rotaları Tanımlama

- `<Routes>` bileşeni, içinde `<Route>` bileşenleri barındırır.
- Her bir `<Route>`, bir yol (URL) ve o yola karşılık gelen bileşeni belirtir.

#### 🔹 <Route path="/profile" element={<Profile />} >

- `/profile` yolu için **Profile** bileşeni gösterilir.
- Bu, ana profil sayfasıdır.

#### 🔹 İç İçe Rotalar (Nested Routes)

- Ana `/profile` rotasının içine **iç içe** rotalar yerleştirilmiştir:
  - `/profile/about`: **ProfileAbout** bileşeni
  - `/profile/updates`: **ProfileUpdates** bileşeni
  - `/profile/settings`: **ProfileSettings** bileşeni
- Yani, `/profile` adresine gidildiğinde, kullanıcı bunlara bağlı iç sayfalara da yönlendirilebilir.

#### 🔹 <Route path="\*" element={<h1>🚫 Sayfa Bulunamadı</h1>} />

- Bu, bir **404 sayfasıdır**
- `path="*"` ile tüm diğer yolları kapsar. Eğer kullanıcı mevcut olmayan bir yola giderse, bu sayfa (örneğin `Sayfa Bulunamadı`) gösterilir.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
