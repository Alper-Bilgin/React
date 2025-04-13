# **⚛️Api İle Döviz Uygulaması**

## 🔁 Currency.js Detaylı Açıklama

```jsx
import React, { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";
```

- 📦 `useState` → React’in durum yönetim hook’u. Bileşen içinde veri saklamak için.

- 🎨 `currency.css` → Stil dosyası, uygulamanın görünümünü belirliyor.

- 🔄 `FaRegArrowAltCircleRight` → Sağ ok ikonu (döviz yönünü simgeliyor).

- 🌐 `axios` → API çağrıları yapmak için kullanılan kütüphane.

---

## 🌍 API Bilgileri

```jsx
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_...";
```

- 📡 `BASE_URL` → API'nin temel adresi.

- 🔑 `API_KEY` → API’ye bağlanmak için gerekli özel anahtar.

---

## 🧠 useState Kullanımı

```jsx
const [amount, setAmount] = useState();
const [fromCurrency, setFromCurrency] = useState("USD");
const [toCurrency, setToCurrency] = useState("TRY");
const [result, setResult] = useState(0);
```

| Değişken          | Açıklama                                    | Başlangıç Değeri |
| ----------------- | ------------------------------------------- | ---------------- |
| 💵 `amount`       | Kullanıcının çevirmek istediği para miktarı | boş              |
| 💱 `fromCurrency` | Kaynak para birimi                          | "USD"            |
| 🔁 `toCurrency`   | Hedef para birimi                           | "TRY"            |
| 💰 `result`       | Dönüştürülmüş para miktarı                  | 0                |

---

## 🔄 Döviz Çevirme Fonksiyonu

```jsx
const exchange = async () => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
  const result = (response.data.data[toCurrency] * amount).toFixed(2);
  setResult(result);
};
```

### **🧩 Açıklama:**

🧩 **Fonksiyon Tanımı**

- `async` ile tanımlandığı için fonksiyon **asenkron** çalışır.
- Bu sayede içinde `await` anahtar kelimesi kullanılabilir.

🌐 **API Çağrısı**

- `axios.get()` ile API’ye **HTTP GET isteği** yapılır.
- Bu istek, güncel döviz kurlarını çekmek için kullanılır.
- `await` sayesinde API yanıtı beklenir ve işlem duraklatılır.

🔗 **URL Oluşturulması**
| Parça | Anlamı |
| --- | --- |
| `BASE_URL` | API’nin temel adresi |
| `API_KEY` | API’ye bağlanmak için gerekli **erişim anahtarı** |
| `fromCurrency` | Kullanıcının seçtiği **kaynak para birimi** (örnek: `USD`) |

🧠 Bu URL, kullanıcıdan alınan verilere göre dinamik olarak oluşturulur.

📦 **API'den Gelen Veriyi Kullanma**

- API’den dönen veride, `data` nesnesi içinde her para biriminin döviz kuru bulunur.

- Kullanıcının seçtiği **hedef para biriminin kuru**, bu yapı sayesinde çekilir.

  - Örnek: `response.data.data["EUR"]` → 0.92

---

## 🧱 Arayüz

```jsx
<div className="currency-div">
  <div className="title">
    <h3>DÖVİZ KURU UYGULAMASI</h3>
  </div>
```

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
