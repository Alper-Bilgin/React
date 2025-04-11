# 🆚 JavaScript (JS) ve JSX Arasındaki Fark Nedir?

React ile çalışırken genellikle hem **JavaScript (JS)** hem de **JSX** kullanırız. Ancak bu iki kavram aynı şey değildir. Aralarında önemli farklar vardır.

## 📌 1. JavaScript (JS) Nedir?

**JavaScript**, tarayıcılar tarafından çalıştırılan bir **programlama dilidir**. Web sayfalarını dinamik hâle getirmek için kullanılır.

```js
function selamla(isim) {
  return "Merhaba, " + isim;
}
```

## 📌 2. JSX Nedir?

**JSX (JavaScript XML)**, JavaScript içinde **HTML benzeri** yazmamıza olanak tanıyan özel bir yazım şeklidir. JSX, sadece **React** gibi kütüphanelerle anlam kazanır.

JSX, tarayıcıların doğrudan anlayacağı bir dil **değildir**, bu yüzden React projelerinde **Babel** gibi bir derleyici tarafından normal JavaScript’e çevrilir.

**Örnek JSX**

```jsx
const element = <h1>Merhaba, React!</h1>;
```

Yukarıdaki kod, JavaScript’te şu hale dönüştürülür:

```js
const element = React.createElement("h1", null, "Merhaba, React!");
```

---

## **🆚 JS vs JSX – Farklar Tablosu**

| Özellik            | JavaScript (JS)  | JSX (JavaScript XML)                |
| ------------------ | ---------------- | ----------------------------------- |
| Tür                | Programlama dili | JS içinde kullanılan özel sözdizimi |
| Kullanım Alanı     | Her yerde        | Sadece React gibi kütüphanelerle    |
| HTML benzeri yazım | Hayır            | Evet                                |
| Tarayıcı Desteği   | Doğrudan çalışır | Babel ile JS’e çevrilmeden çalışmaz |
| Uzantı             | `.js`            | `.jsx`                              |

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
