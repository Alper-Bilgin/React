# 🔌 React’te API ile Veri Çekmenin 3 Yolu

---

## 1. 🧱 XMLHttpRequest

Bu, JavaScript’in en eski veri çekme yöntemlerinden biridir. Çok düşük seviye bir API’dir. Modern uygulamalarda pek kullanılmaz çünkü kullanımı karmaşıktır.

**Örnek:**

```jsx
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data");
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
```

👎 Neden tercih edilmiyor?

- Çok fazla manuel işlem gerekir.

- Promise desteği yoktur.

---

## 2. 🌊 fetch() API

`fetch()` modern tarayıcılarda yerleşik gelir. Promise tabanlıdır ve daha sade bir söz dizimi sunar.

**Örnek:**

```jsx
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Hata:", error));
```

👍 Artıları:

- Daha okunabilir

- Promise tabanlı

👎 Eksileri:

- `axios` kadar kapsamlı değildir.

- Hataları yakalama konusunda bazen kafa karıştırıcı olabilir.

---

## 3. ⚡ Axios (En Popüler Yöntem)

**Axios**, HTTP istekleri yapmak için kullanılan, Promise tabanlı bir JavaScript kütüphanesidir. Hem tarayıcıda hem Node.js'te çalışır.

🔧 “Veriyi çek, işle ve kullanıcıya göster” işlemini çok daha kolaylaştırır!

---

## 1️⃣ Axios Nasıl Kurulur?

Projenizde Axios kullanmak için:

```bash
npm install axios
veya
yarn add axios

```

---

## 2️⃣ Temel Kullanım 🚀

```jsx
import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response.data); // ✅ Veriyi ekrana bas
  })
  .catch((error) => {
    console.error("Hata:", error); // ❌ Hataları yakala
  });
```

### 🔍 **Kısa Açıklama:**

- `axios.get(...)`: API'ye GET isteği gönderir.

- `.then(...)`: İstek başarılı olursa, gelen veriyi `console.log` ile yazdırır.

- `.catch(...)`: Hata oluşursa, hatayı `console.error` ile yakalar ve yazdırır.

**🖥️ Beklenen Çıktı**

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit..."
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae..."
  },
  ...
]

```

Toplamda 100 adet "post" objesi döner. Her biri `userId`, `id`, `title` ve `body` alanlarını içerir.

---

## 3️⃣ React İçinde Axios Kullanımı 💡

Bir örnekle görelim:

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data); // ✅ Veriyi state’e kaydet
      })
      .catch((error) => {
        console.error("Hata:", error); // ❌ Hataları yakala
      });
  }, []);

  return (
    <div>
      <h2>📰 Postlar</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
```

### 🧠 **Kısa Açıklama:**

- `useState([])`: `posts` adında bir state tanımlar, başlangıçta boş bir dizi.

- `useEffect(...)`: Bileşen yüklendiğinde (`componentDidMount` gibi) API'den veriyi çeker.

- `axios.get(...)`: Sahte bir API'den (`jsonplaceholder`) "post" verilerini alır.

- `setPosts(...)`: Gelen verileri `posts` state'ine kaydeder.

- `return (...)`: Veriler geldikten sonra başlıklarını (`title`) ekranda listeler.

**🖥️ Beklenen Çıktı**

```html
<h2>📰 Postlar</h2>
<ul>
  <li>
    <strong>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</strong>
  </li>
  <li><strong>qui est esse</strong></li>
  <li><strong>ea molestias quasi exercitationem repellat qui ipsa sit aut</strong></li>
  ...
</ul>
```

---

## 4️⃣ POST, PUT, DELETE İstekleri 🔁

Axios ile sadece veri çekmek değil, veri **ekleme**, **güncelleme** ve **silme** işlemleride yapılabilir.

### 📤 POST (Yeni veri ekleme)

```jsx
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "Yeni Başlık",
    body: "İçerik buraya",
    userId: 1,
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

### 🧠 **Kısa Açıklama:**

- `axios.post(URL, VERİ)`: Belirtilen URL'ye veri gönderir (POST isteği).

- `title`, `body`, `userId`: Gönderilen gönderinin içeriği.

- `.then(...)`: İstek başarılıysa, dönen cevabı (oluşturulan post'u) ekrana yazdırır.

- `.catch(...)`: Hata varsa yakalar ve yazdırır.

**🖥️ Beklenen Çıktı**

```json
{
  "title": "Yeni Başlık",
  "body": "İçerik buraya",
  "userId": 1,
  "id": 101
}
```

### ✏️ PUT (Veri güncelleme)

```jsx
axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    title: "Güncellenmiş Başlık",
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

### 🧠 **Kısa Açıklama:**

- `axios.put(URL, VERİ)`: Belirtilen gönderinin tüm içeriğini yeni verilerle **tamamen değiştirir**.

- Burada, `/posts/1`: ID'si 1 olan post güncellenmek isteniyor.

- Yalnızca `title` gönderildiği için, diğer alanlar (örneğin `body`, `userId`) eksik kalabilir.

**🖥️ Beklenen Çıktı**

```json
{
  "title": "Güncellenmiş Başlık",
  "id": 1
}
```

### 🗑 DELETE (Veri silme)

```jsx
axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then(() => console.log("Silindi"))
  .catch((error) => console.error(error));
```

### 🧠 **Kısa Açıklama:**

- `axios.delete(...)`: Belirtilen URL'deki veriyi silmeye çalışır.

- Burada: `/posts/1` → ID’si 1 olan post silinmek isteniyor.

- `.then(...)`: Silme başarılıysa `"Silindi"` mesajı ekrana yazdırılır.

- `.catch(...)`: Hata varsa yakalar ve yazdırır.

**🖥️ Beklenen Çıktı**

```nginx
Silindi
```

---

## 🧠 **Async/Await**

#### 1. **Async Fonksiyon Nedir?**

- **`async`** anahtar kelimesi bir fonksiyonun asenkron olduğunu belirtir.

- `async` fonksiyonlar her zaman bir **Promise** döndürür.

- Bir **`async`** fonksiyon içinde `await` kullanılabilir.

#### 2. **Await Nedir?**

- **`await`** sadece `async` fonksiyonları içinde çalışır.

- Bir **Promise** döndüren bir işlemin tamamlanmasını bekler.

- **`await`** işlemi **bloklamaz**, sadece bekleme işlemi başlatılır ve diğer işlemler yürütülür.

```js
async function veriCek() {
  const veri = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await veri.json();
  console.log(data); // JSON verisini yazdırıyoruz
}

veriCek();
```

🧠 **Açıklama:**

- `fetch()` asenkron bir işlem olduğu için normalde hemen sonrasında veriye ulaşamayız.

- **`await`** burada `fetch()` işleminin tamamlanmasını bekler ve sonra `json()` metodunu çağırır.

---

## 📦 **Kod Örneği**

### PostList.jsx

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]); // Posts'u tutacak state
  const [loading, setLoading] = useState(true); // Yükleniyor durumu
  const [error, setError] = useState(null); // Hata durumu

  // API'den veri çekmek için async function
  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); // API isteği
      setPosts(response.data); // Veriyi state'e kaydet
      setLoading(false); // Yükleme tamamlandı
    } catch (err) {
      setError("Veri alınırken bir hata oluştu!"); // Hata mesajı
      setLoading(false); // Yükleme tamamlandı
    }
  };

  // useEffect ile sayfa yüklendiğinde veri çekme işlemi başlatılır
  useEffect(() => {
    fetchPosts();
  }, []); // Boş bağımlılık arrayi, component yüklendiğinde sadece bir kez çalışır

  return (
    <div>
      <h2>📰 Postlar</h2>
      {loading && <p>Yükleniyor...</p>} {/* Yükleniyor mesajı */}
      {error && <p>{error}</p>} {/* Hata mesajı */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
```

### 🧠 **Açıklama:**

1.  **useState**:

    - `posts`: API'den gelen veriyi tutmak için kullanılır.

    - `loading`: Verinin yüklenip yüklenmediğini kontrol eder.

    - `error`: API isteği sırasında oluşan hatayı saklar.

2.  **fetchPosts** (Async/Await):

    - **async function**: Asenkron bir fonksiyon oluşturduk. Bu fonksiyon içinde **await** kullanarak API'den veri çekiyoruz.

    - **axios.get()**: Bu, `GET` isteği gönderir ve `response` döner. **await** sayesinde yanıt gelene kadar fonksiyon bekler.

    - **setPosts(response.data)**: API'den gelen veriyi `posts` state'ine kaydeder.

    - **setLoading(false)**: Yüklenme durumu bittiğinde `loading` state'ini `false` yapar.

    - **catch**: Eğer bir hata oluşursa, `error` state'ini günceller ve hata mesajını gösterir.

3.  **useEffect**:

    - Bu hook, bileşen ilk render olduğunda çalışır. Burada, **fetchPosts** fonksiyonunu çağırarak veri çekmeye başlıyoruz.

    - Bağımlılık array'i boş (`[]`), bu da demek oluyor ki sadece bileşen ilk kez render olduğunda çalışır.

4.  **JSX Render**:

    - Eğer `loading` true ise "Yükleniyor..." mesajı gösterilir.

    - Eğer `error` varsa, hata mesajı gösterilir.

    - `posts.map(...)`: Gelen veriyi bir liste olarak render ederiz.

###📤 **Beklenen Çıktı:**

**Başlangıç Durumu (Yükleniyor...)**:

```html
📰 Postlar Yükleniyor...
```

**Veri Yüklendikten Sonra (Başarıyla Çekilmiş Veri)**:

```html
📰 Postlar
<ul>
  <li key="1">
    <strong>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</strong>
    <p>quia et suscipit...</p>
  </li>
  <li key="2">
    <strong>qui est esse</strong>
    <p>est rerum tempore vitae...</p>
  </li>
  ...
</ul>
```

**Hata Durumu (Veri Çekilemezse)**:

```html
📰 Postlar Veri alınırken bir hata oluştu!
```

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
