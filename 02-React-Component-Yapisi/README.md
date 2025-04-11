# ⚛️ React'te Component Yapısı

## 📌 1. React’te Component (Bileşen) Nedir?

React, arayüzü küçük **yeniden kullanılabilir parçalar** hâlinde inşa etmenizi sağlar. Bu parçalara **component** (bileşen) denir.

- Bir component, genellikle **bir fonksiyon** veya **bir class** olarak yazılır.

- Her bileşen bir **HTML benzeri JSX** kod döndürür.

- Component'ler, daha büyük yapılar oluşturmak için birleştirilebilir.

## 🧱 2. Bileşen Türleri

### a. Fonksiyonel Component

```jsx
function Merhaba() {
  return <h1>Merhaba, React!</h1>;
}
```

**veya **ES6 arrow function** kullanarak:**

```jsx
const Merhaba = () => {
  return <h1>Merhaba, React!</h1>;
};
```

### b. Sınıf Tabanlı Component

```jsx
import React, { Component } from "react";

class Merhaba extends Component {
  render() {
    return <h1>Merhaba, React!</h1>;
  }
}
```

## 📂 3. Component Nasıl Oluşturulur?

- **`src/components`** adında bir klasör açılır (component’leri ayrı tutmak için önerilir).

- İçine bir dosya oluşturulur: örneğin `Merhaba.jsx`

- JSX uzantısı kullanılır çünkü hem JS hem HTML benzeri yapı içerir.

## 🛠️ 4. Bir Component Dosyası Nasıl Yazılır?

Örnek : **Merhaba.jsx**

```jsx
import React from "react"; // React 17+ ile şart değil ama genellikle eklenir

const Merhaba = () => {
  return (
    <div>
      <h2>Merhaba, dünya!</h2>
      <p>Bu bir React bileşenidir.</p>
    </div>
  );
};

export default Merhaba;
```

## 🔁 5. Bileşeni Başka Bir Yerde Kullanmak (Import Etmek)

Örnek : **App.jsx** içinde kullanmak

```jsx
import React from "react";
import Merhaba from "./components/Merhaba"; // bileşen içe aktarılır

function App() {
  return (
    <div>
      <h1>Ana Uygulama</h1>
      <Merhaba /> {/* bileşeni burada kullanıyoruz */}
    </div>
  );
}

export default App;
```

## 🎁 6. Props (Bileşene Veri Göndermek)

Component'lere dışarıdan veri gönderilebilir. Bu verilere **props** denir.

**Örnek:**

```jsx
const Merhaba = (props) => {
  return <h2>Merhaba, {props.isim}!</h2>;
};
```

**Kullanımı:**

```jsx
<Merhaba isim="Ahmet" />
```

**🧠 Alternatif olarak props'u destructure edebilirsin:**

```jsx
const Merhaba = ({ isim }) => {
  return <h2>Merhaba, {isim}!</h2>;
};
```

# **📌 NOTLAR**

---

## 1. Return Ederken Tek Bir Ana Eleman Olmalı

---

React’te bir bileşen (`component`) içinde `return` edilen JSX kodunun **tek bir kapsayıcı (ana) eleman** içinde olması gerekir. Aksi hâlde şu hatayı alırsın:

> Adjacent JSX elements must be wrapped in an enclosing tag

**✅ Doğru Kullanım:**

```jsx
function App() {
  return (
    <div>
      <h1>Merhaba</h1>
      <p>React öğreniyorum</p>
    </div>
  );
}
```

**❌ Yanlış Kullanım:**

```jsx
function App() {
  return (
    <h1>Merhaba</h1>
    <p>React öğreniyorum</p>
  ); // HATA: İki ayrı element tek başına return edilemez
}
```

## 🧩 2. <Fragment> Kullanımı

---

Ana kapsayıcı olarak `<div>` yerine **React.Fragment** veya kısaltması olan `<> </>` kullanılabilir. Bu, fazladan bir HTML elementi oluşturmadan JSX'i gruplayabilmeyi sağlar.

**✅ Fragment ile:**

```jsx
function App() {
  return (
    <>
      <h1>Başlık</h1>
      <p>Açıklama</p>
    </>
  );
}
```

## 📤 3. "export default" ve "export" Arasındaki Fark

---

**✅ export default**

- Bir dosyada yalnızca **bir tane** olabilir.

- Dosya dışından import ederken, **istediğin ismi** verebilirsin.

```jsx
// Merhaba.jsx
function Merhaba() {
  return <h2>Merhaba!</h2>;
}

export default Merhaba;
```

```jsx
// App.jsx
import Selam from "./Merhaba"; // isim farklı olabilir
```

**✅ export (named export)**

- Bir dosyada **birden fazla** kullanılabilir.

- Import ederken **aynı isimle** almak zorundasın.

```jsx
// Merhaba.jsx
export function Merhaba() {
  return <h2>Merhaba!</h2>;
}

export function Hosgeldin() {
  return <p>Hoş geldin!</p>;
}
```

```jsx
// App.jsx
import { Merhaba, Hosgeldin } from "./Merhaba"; // aynı isimle almak şart
```

**❌ export tanımı, function içinde yapılamaz**

---

**❌ Yanlış Kullanım:**

```jsx
function Selam() {
  export default Selam; // ❌ HATA: export dışarıda olmalı
  return <p>Selam!</p>;
}
```

**✅ Doğru Kullanım:**

```jsx
function Selam() {
  return <p>Selam!</p>;
}

export default Selam;
```

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
