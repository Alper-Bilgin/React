# ⚛️ React Debugging

---

## 🔍 React Debugging

React projelerinde hataları tespit etmek ve düzeltmek bazen zorlayıcı olabilir. Neyse ki React bize güçlü araçlar ve yöntemler sunuyor.

### 🛠️ 1. **Console.log() ile Hata Ayıklama**

En basit ve en yaygın yöntem

```jsx
function MyComponent({ name }) {
  console.log("Gelen isim:", name); // 🔍 Değeri kontrol et
  return <div>Merhaba, {name}!</div>;
}
```

🧠 **İpucu:** `console.table()` ile dizileri ve objeleri tablo şeklinde görebilirsin:

```jsx
console.table([
  { ad: "Alper", yaş: 21 },
  { ad: "Ali", yaş: 22 },
]);
```

---

### 🌐 2. **React Developer Tools (Chrome Eklentisi)**

🧩 Bu eklenti ile komponentlerin **state**, **props** ve **context** bilgilerini anlık görebilirsin.

### 🔧 Kurulum:

- Chrome Web Store’a gir

- “React Developer Tools” eklentisini indir ve yükle

### 🔍 Kullanım:

- Sayfayı aç

- Sağ tık > İncele (Inspect)

- “⚛️ Components” sekmesine gel

---

### 🧪 3. **useEffect ile State Takibi**

Bazen state’in ne zaman değiştiğini bilmek istersin. Bunun için `useEffect` kullanılabilir!

```jsx
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count değeri değişti:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Artır</button>;
}
```

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
