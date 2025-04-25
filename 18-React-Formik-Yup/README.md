# **⚛️ React da Formik ve Yup Yapısı**

## 📌 1. Giriş: Formik ve Yup Nedir?

### ✅ Formik Nedir?

Formik, React uygulamalarında **form verisini yönetmek** için kullanılan bir kütüphanedir. `useState`, `useEffect` gibi hook'larla form yazmaktan bizi kurtarır. Şunları kolaylaştırır:

- Form state'ini yönetmek (`values`)
- Hataları yönetmek (`errors`)
- Formu submit etmek

### ✅ Yup Nedir?

Yup, JavaScript/React içinde veri doğrulamak için kullanılan bir **şema tabanlı** (schema-based) doğrulama (validation) kütüphanesidir. Formik ile birlikte kullanılarak formdaki input’ları kolayca doğrulamak mümkündür.

## 🛠 2. Gerekli Kurulumlar

Formik ve Yup'u projemize ekleyelim:

```bash
npm install formik yup
```

## 📄 3. Basit Bir Formik Formu (Yup Olmadan)

### Amaç:

- Bir form oluşturalım: **ad,email**
- Formu gönderince konsola verileri yazdıralım
- Henüz validasyon işklemi yok!

```jsx
import React from "react";
import { useFormik } from "formik";

function BasicForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("Form verileri:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Adınız</label>
        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
}

export default BasicForm;
```

📝 Bu formda:

- **`formik.handleChange`**: input değiştiğinde değeri günceller.
- **`formik.handleSubmit`**: form submit edilince çalışır.
- **`formik.values`**: formun anlık değerlerini taşır.

## ✅ 4. Formik + Yup ile Validasyon

Şimdi forma doğrulama (validation) kuralları ekleyelim.

### Kurallar:

- **`name`** boş olamaz
- **`email`** geçerli formatta olmalı ve boş olamaz

```jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ValidatedForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("İsim gerekli!"),
      email: Yup.string().email("Geçersiz email!").required("Email gerekli!"),
    }),
    onSubmit: (values) => {
      console.log("Geçerli form:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Adınız</label>
        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.name && formik.errors.name && <div style={{ color: "red" }}>{formik.errors.name}</div>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
}

export default ValidatedForm;
```

📌 Açıklamalar:

- **`validationSchema`**: Yup ile kurallar tanımlanır.
- **`formik.touched`**: input'a tıklanıp çıkıldığında true olur.
- **`formik.errors`**: geçersiz alanları içerir.

---

## **🛠️ Formik’in Kullanışlı Özellikleri**

### 1. formik.resetForm()

Formu sıfırlamak için kullanılır.

```jsx
onSubmit: (values, { resetForm }) => {
  console.log(values);
  resetForm(); // formu temizler
};
```

### 2. validateOnBlur, validateOnChange

Validasyonun ne zaman yapılacağını kontrol eder.

```jsx
const formik = useFormik({
  initialValues: {...},
  validationSchema: ...,
  validateOnBlur: true,
  validateOnChange: false, // sadece submitte kontrol et
});
```

### 3. touched

Kullanıcının hangi alanlara dokunduğunu (fokuslayıp çıktığını) takip eder.

```jsx
{
  formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>;
}
```

Bu sayede hata mesajları sadece kullanıcı o alana dokunduysa gösterilir.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
