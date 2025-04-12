# ⚛️ React useState Hook

## 🧠 useState Nedir?

useState 👉 bir **React Hook**’udur. Yani React bileşenlerinde **durum (state)** tutmamıza ve bu durumu **güncelleyerek bileşeni yeniden render** etmemize olanak tanır.

```jsx
const [deger, setDeger] = useState(ilkDeger);
```

📌 deger: Anlık state değeridir.

📌 setDeger: Yeni değer atamak için kullandığımız fonksiyondur.

📌 useState(ilkDeger): Başlangıçta verilecek değerdir.

---

## Sayaç Örneği:

```jsx
import React, { useState } from "react";

function Sayac() {
  const [sayi, setSayi] = useState(0);

  return (
    <div>
      <h2>🔢 Butona {sayi} kez tıkladın!</h2>
      <button onClick={() => setSayi(sayi + 1)}>➕ Artır</button>
    </div>
  );
}
```

🛠️ **Ne Oluyor Burada?**

- sayi, 0’dan başlıyor.

- Her buton tıklamasında setSayi fonksiyonu çağrılıyor ve sayi +1 oluyor.

- Ekran kendini otomatik olarak güncelliyor.

---

## 📁 Obje ile State Tutmak

```jsx
function Profil() {
  const [kisi, setKisi] = useState({
    isim: "Alper",
    sehir: "Ankara",
  });

  const sehirDegistir = () => {
    setKisi((prev) => ({
      ...prev,
      sehir: "Bursa",
    }));
  };

  return (
    <div>
      <p>
        🧍‍♀️ {kisi.isim} yaşıyor: 📍{kisi.sehir}
      </p>
      <button onClick={sehirDegistir}>🗺️ Şehri Değiştir</button>
    </div>
  );
}
```

### 🎯 **Neden ...prev?**

Çünkü sadece bir alanı değiştirirken diğer bilgileri korumak isteriz. Spread (...) sayesinde eski değerleri tutup sadece yenisini ekliyoruz.

---

## 🛎️ Önemli Not: useState Asenkron ⏳

```jsx
const [sayac, setSayac] = useState(0);

const arttir = () => {
  setSayac(sayac + 1);
  console.log(sayac); // Beklediğin yeni değer burada YOK 😅
};
```

setSayac çağrıldığında hemen değil, bir sonraki render’da state güncellenir. Bu yüzden hemen ardından eski değeri görürsün.

---

## 🎯 Input ile Dinamik State

```jsx
function EmailForm() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="📧 Email girin"
      />
      <p>Girdiğiniz email: {email}</p>
    </div>
  );
}
```

📝 Form alanlarıyla çalışırken input’un value'sunu state'e bağlayıp güncellemeyi onChange ile yaparız.

---

# **🎉 Sonuç**

✅ `useState` ile:

- Bileşen içinde veri tutabiliriz

- Kullanıcı etkileşimine göre bu verileri güncelleyebiliriz

- Ekranı otomatik olarak güncelleyebiliriz

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
