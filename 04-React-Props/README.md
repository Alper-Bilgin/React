# 📘 React Props Nedir?

**Props (Properties)**, **React bileşenlerine** dışarıdan veri aktarmak için kullanılan bir mekanizmadır. Props, **bileşenlere dışarıdan veri (özellik) göndermemizi** sağlar ve bileşenlerin davranışını değiştirebilir. Props, sadece **okunabilir** (immutable) verilerdir; yani, bir bileşene props olarak gönderilen veriyi, o bileşen değiştiremez.

**🔑 Önemli Noktalar:**

- **Props** bileşenler arasında veri taşır.

- Props **immutable**'dır, yani props olarak gönderilen veriler bileşenin içinde değiştirilemez.

- Props kullanılarak, **bileşenler arasında veri iletimi** sağlanabilir.

## 🧩 Props Kullanımı

React'te **Props**, bir bileşene dışarıdan veri göndermek için kullanılır. Bu veri, bileşenin render edilmesinde kullanılır. Props ile veri gönderimi, bileşenin dışındaki bir kaynağından (örneğin, App bileşeninden) yapılır.

### 📦 Props Göndermek

Bir bileşene veri gönderirken, props'u şu şekilde kullanırsın:

```jsx
// ParentComponent.jsx
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <div>
      <ChildComponent name="Ahmet" age={25} />
    </div>
  );
}

export default ParentComponent;
```

Yukarıdaki örnekte, `ParentComponent` bileşeni `ChildComponent` bileşenine `name` ve `age` adında iki prop gönderiyor.

### 🧳 Props'u Almak ve Kullanmak

Child bileşeni, bu props'u şu şekilde alır ve kullanır:

```jsx
// ChildComponent.jsx
import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <h1>Merhaba, {props.name}!</h1>
      <p>Yaşınız: {props.age}</p>
    </div>
  );
}

export default ChildComponent;
```

---

## 🧠 Props ile Veri Aktarımı

### 🎯 Props Türleri

**String, Number ve Boolean Props**
Props, herhangi bir veri tipi olabilir: string, number, boolean, object, array vb.

```jsx
// App.jsx
function App() {
  return (
    <div>
      <Greeting name="Ahmet" age={25} isMember={true} />
    </div>
  );
}

// Greeting.jsx
function Greeting(props) {
  return (
    <div>
      <h1>Merhaba, {props.name}!</h1>
      <p>Yaşınız: {props.age}</p>
      <p>Üye: {props.isMember ? "Evet" : "Hayır"}</p>
    </div>
  );
}
```

**Array ve Object Props**
Props olarak **array** veya **object** gönderilebilir. Bu veri tipleriyle çalışırken, array elemanları veya obje anahtarları üzerinde döngüler yapabiliriz.

```jsx
// App.jsx
function App() {
  const hobbies = ["Kodlama", "Kitap Okuma", "Seyahat Etme"];
  return (
    <div>
      <HobbyList hobbies={hobbies} />
    </div>
  );
}

// HobbyList.jsx
function HobbyList(props) {
  return (
    <ul>
      {props.hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  );
}
```

---

## ⚡ Props ile Dinamik İçerik

React’te props kullanarak bileşenlerin içeriğini dinamik hâle getirebilirsiniz. Örneğin, bir formu props kullanarak veri alacak şekilde tasarlayabiliriz:

```jsx
// Form.jsx
import React from "react";

function Form(props) {
  return (
    <form>
      <label>
        {props.labelText}
        <input type="text" />
      </label>
    </form>
  );
}

export default Form;

// App.jsx
function App() {
  return (
    <div>
      <Form labelText="Adınızı Girin" />
    </div>
  );
}
```

---

## 🌐 Props ile Component'ler Arası İletişim

React’te bileşenler arasında veri aktarmak için en yaygın yöntem **props kullanmaktır**. Bu, bir bileşenin alt bileşenlerine (child component) veri göndermek için oldukça etkilidir.

```jsx
// App.jsx (Ana Bileşen)
import React from "react";
import Welcome from "./Welcome";

function App() {
  const username = "Ahmet";
  return (
    <div>
      <Welcome name={username} />
    </div>
  );
}

export default App;
```

```jsx
// Welcome.jsx (Çocuk Bileşen)
import React from "react";

function Welcome(props) {
  return <h1>Merhaba, {props.name}!</h1>;
}

export default Welcome;
```

Burada, **App** bileşeni **Welcome** bileşenine `name` adında bir prop gönderiyor ve çocuk bileşen bu veriyi kullanarak ekrana yazdırıyor.

---

## **💡 Props ve Children Kavramlarının Özeti**

### 1. **Props**:

- **Props**, bileşenler arasında veri iletimini sağlayan bir araçtır.

- Bir bileşen, dışarıdan veri alırken **props** kullanır. Bu veriler bileşen içinde **değiştirilemez** (immutable).

- Örneğin, **Product** bileşeni, dışarıdan aldığı `productName` ve `price` verilerini kullanarak ürün bilgilerini render eder.

### 2. **Children**:

- **Children**, React bileşenlerine içeriği dışarıdan aktarmanın bir yoludur.

- Bir bileşene içerik eklerken, bu içerik otomatik olarak **children** olarak kabul edilir.

- Örneğin, **Container** bileşenine `<Product />` bileşenini **children** olarak eklediğimizde, **Container** bileşeni bu içeriği `{children}` ile render eder.

---

## **🎯 Sonuç**

Bu örnekte, **App.jsx** bileşeninden **Product** ve **Container** bileşenlerine veri aktarımı yapılıyor. `Product` bileşeni props kullanarak ürün adı ve fiyatı alırken, **Container** bileşeni **children** kullanarak içeriği dinamik olarak alıyor.

Bu yöntemler, bileşenler arasında veri iletimi ve içerik yönetimi konusunda güçlü araçlardır. Eğer React'te daha büyük ve karmaşık uygulamalar geliştiriyorsanız, props ve children kullanarak veri iletimi çok yaygın ve etkili bir yöntem olacaktır.

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
