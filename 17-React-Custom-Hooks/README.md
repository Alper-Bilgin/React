# ⚛️ **React Custom Hooks**

## 1. Hook Nedir?

**Hooks**, React 16.8 ile gelen bir özelliktir. Fonksiyon bileşenlerinde state yönetimi gibi sınıflarda olan özellikleri kullanabilmeyi sağlar.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // useState bir Hook'tur

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## 2. Custom Hook Nedir?

**Custom Hook**, bir veya birden fazla React hook’u (örneğin: `useState`, `useEffect`, vs.) kullanan kendi fonksiyonundur. Genellikle "use" ile başlar. Kod tekrarı yapmamak için kullanılır.

---

## **Örnek: useClipboard Custom Hook’u**

```jsx
// useClipboard.jsx

import { useState } from "react";

function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch (err) {
      console.error("Kopyalama başarısız:", err);
      setCopied(false);
    }
  };

  return [copied, copy];
}

export default useClipboard;
```

```jsx
// App.jsx
import React from "react";
import useClipboard from "./useClipboard";

function App() {
  const [copied, copy] = useClipboard();

  return (
    <div>
      <button onClick={() => copy("Merhaba dünya!")}>Yazıyı Kopyala</button>
      {copied && <span>✔️ Kopyalandı!</span>}
    </div>
  );
}

export default App;
```

### 1. useState(false)

```jsx
const [copied, setCopied] = useState(false);
```

- `copied` → kullanıcı yazıyı kopyaladı mı? (true/false)
- Başlangıçta `false`, çünkü henüz kopyalama yapılmadı.

### 2. copy Fonksiyonu

```jsx
const copy = async (text) => {
  await navigator.clipboard.writeText(text);
};
```

- Bu fonksiyon, verilen `text`’i panoya yazar.
- Modern tarayıcılarda desteklenen `navigator.clipboard` API’sini kullanır.

### 3. Başarıyla Kopyalandıysa

```jsx
setCopied(true);
setTimeout(() => setCopied(false), timeout);
```

- Kullanıcıya kısa süreliğine "Kopyalandı!" mesajı göstermek istiyoruz.
- `timeout` değeri kadar sonra `copied` tekrar false yapılır.

### 4. Hata Yakalama

```jsx
catch (err) {
  console.error("Kopyalama başarısız:", err);
}
```

- Eğer kullanıcı panoya yazmaya izin vermezse (örneğin HTTP değil HTTPS olmayan bir sitedeysen), hata oluşabilir.
- Bu blok hataları yakalayıp uygulamanın çökmesini engeller.

### 5. Return Değeri

```jsx
return [copied, copy];
```

- Hook’tan iki değer döndürürüz:
  - `copied`: şu an kopyalandı mı?
  - `copy`: bir yazıyı kopyalamak için çağıracağın fonksiyon

### 6. Kullanım:

```jsx
const [copied, copy] = useClipboard();
copy("YAZI");
```

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
