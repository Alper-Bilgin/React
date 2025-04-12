# ⚛️ React useEffect Hook

---

## 🎣 useEffect Nedir?

useEffect, bir bileşeni harici bir sistem ile senkronize etmenizi sağlayan React Hook’udur.

🔄 useEffect sayesinde bileşen yüklendiğinde, güncellendiğinde ya da kaldırıldığında belirli kodları çalıştırabiliriz.

---

## 🧠 Temel Kullanımı

```jsx
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Bileşen yüklendi!");

    return () => {
      console.log("Bileşen kaldırıldı!");
    };
  }, []);

  return <div>Merhaba!</div>;
}
```

### Açıklama:

- ✅ `useEffect(() => { ... }, [])` → Sadece bileşen **ilk kez yüklendiğinde** çalışır.

- 🔄 `return` içindeki fonksiyon → Bileşen **kaldırılırken** (unmount) çalışır.

- 📌 İkinci parametre olan `[]`, **bağımlılık dizisi**dir. Bu boşsa, efekt sadece bir kez çalışır.

---

## 🔁 **Side Effect (Yan Etki)** Nedir?

**React (ve genel olarak fonksiyonel programlama) dünyasında "side effect" (yan etki)**, saf olmayan (impure) bir fonksiyonun, kendi kapsamı (scope) dışında bir durumu okuması veya değiştirmesiyle ortaya çıkan işlemdir. Fonksiyonel programlamada amaç, **"pure functions" (saf fonksiyonlar)** kullanarak girdilerle çıktılar arasında doğrudan ve öngörülebilir bir ilişki kurmaktır. Ancak bir fonksiyon şunları yaparsa bu, bir "yan etki" (side effect) olarak değerlendirilir:

- Uygulama dışında bir kaynağa erişim:
  Örneğin `fetch()` ile bir API'den veri çekmek ya da `localStorage` gibi tarayıcı API'lerine erişmek.

- Global durumu veya dışarıdaki bir değişkeni değiştirmek:
  Örneğin bir global değişkeni güncellemek ya da context dışındaki bir değişkene değer atamak.

- Zamanla ilişkili işlemler:
  `setTimeout`, `setInterval`, ya da zaman damgası (`Date.now()`) gibi işlemler deterministik olmayan sonuçlar ürettiği için yan etkidir.

- Girdi parametrelerinin dışında herhangi bir şeyin değerini değiştirmek veya ondan etkilenmek:
  Örneğin DOM manipülasyonu yapmak, konsola log basmak (`console.log()`), hata fırlatmak (`throw`) gibi.

**🔹 1. Saf Fonksiyon (Pure Function) Örneği**

```js
function add(a, b) {
  return a + b;
}
```

Bu fonksiyon:

- Aynı girdiler için her zaman aynı çıktıyı üretir.

- Dış dünyayı etkilemez, dış dünyadan etkilenmez.

**🔹 2. Yan Etki İçeren Fonksiyon (Impure Function)**

```js
let count = 0;

function increment() {
  count++;
}
```

Bu fonksiyon:

- Her çağrıldığında `count` değişkenini değiştirir (dış dünyayı etkiler).

- Girdisi yok ama çıktısı sabit değil (her çağrıda farklı bir `count` değeri olabilir).

---

## 🎯 Side Effect Kullanımı

```jsx
useEffect(() => {
  console.log("count değişti!");
}, [count]);
```

### 🔍 Ne Zaman Çalışır?

- `count` her değiştiğinde `useEffect` tekrar çalışır.

> 🧪 Bağımlılık dizisine yazılan değişkenler değiştikçe, efekt yeniden çalışır.

## 🔁 Her Render’da Çalıştırmak

```jsx
useEffect(() => {
  console.log("Her render'da çalışır");
});
```

**❗ Bağımlılık dizisi **yoksa**, `useEffect` her render’da çalışır.**

---

## 🧼 Temizleme Fonksiyonu (Cleanup Function)

Bazı efektlerde, örneğin zamanlayıcı, event listener gibi şeylerde bileşen kaldırıldığında temizlik yapmak gerekebilir.

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Her saniye çalışır");
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Temizlendi!");
  };
}, []);
```

### 🔍 Satır Satır İnceleyelim:

1.  **`setInterval`** → her 1000 milisaniyede (1 saniyede) bir, `"Her saniye çalışır"` mesajını `console.log` ile yazar.

2.  **`return () => { ... }`** → Bu, `useEffect`'in **temizleme fonksiyonu**. Bileşen unmount edildiğinde veya efekt yeniden çalıştığında çalışır.

3.  **`clearInterval(interval)`** → Interval’i temizler, yani artık her saniye çalışan kod durdurulur.

4.  **`console.log("Temizlendi!")`** → Temizleme sırasında bu mesaj yazdırılır.

5.  **`[]` bağımlılık dizisi** → Bu efekt sadece **bir kez**, bileşen DOM'a ilk kez eklendiğinde (mount) çalışır. Yani `setInterval` sadece bir kez kurulur.

### **🧪 ÇIKTISI NASIL OLUR?**

Diyelim ki bileşen 5 saniye boyunca aktif kaldı, sonra unmount oldu. Konsol şu şekilde görünür:

```bash
Her saniye çalışır
Her saniye çalışır
Her saniye çalışır
Her saniye çalışır
Her saniye çalışır
Temizlendi!

```

Yani:

- 1 saniyede bir mesaj gelir.

- Bileşen kaldırıldığında (örneğin sayfa değiştiğinde), `clearInterval` sayesinde interval durur.

- Temizlendiğini de konsoldan görebilirsin.

---

# ✅ GENEL **useEffect** KULLANIMLARI

```jsx
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 1️⃣ Her render'da çalışır (state değişse bile)
  useEffect(() => {
    console.log("1️⃣ Her render'da çalışır");
  });

  // 2️⃣ Sadece ilk render'da (component mount) çalışır
  useEffect(() => {
    console.log("2️⃣ Bileşen ilk kez DOM'a eklendiğinde (mount) çalışır");

    // Temizleme fonksiyonu (örnek)
    return () => {
      console.log("🧹 Bileşen kaldırıldığında (unmount) bu temizlik çalışır");
    };
  }, []);

  // 3️⃣ Sadece `count` değiştiğinde çalışır
  useEffect(() => {
    console.log("3️⃣ count değişti:", count);
  }, [count]);

  // 4️⃣ Hem `count` hem `name` değiştiğinde çalışır
  useEffect(() => {
    console.log("4️⃣ count veya name değişti:", { count, name });
  }, [count, name]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useEffect Kullanımı Örnekleri</h2>

      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Artır</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <p>Ad: {name}</p>
        <button onClick={() => setName("Alper")}>Adı Alper yap</button>
        <button onClick={() => setName("Ayşe")}>Adı Ayşe yap</button>
      </div>
    </div>
  );
}

export default App;
```

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
