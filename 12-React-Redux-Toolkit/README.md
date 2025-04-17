# **⚛️Redux Toolkit**

## 🔁 Redux Nedir?

Redux, JavaScript uygulamalarında **uygulama durumunu (state)** yönetmek için kullanılan bir **state management** kütüphanesidir. Genellikle **React** ile birlikte kullanılır, ama aslında **React bağımlılığı yoktur** yani Vue, Angular gibi framework’lerde de kullanılabilir.

## 🔧 Redux Toolkit Nedir?

Redux Toolkit, React projelerinde **durum yönetimini (state management)** kolaylaştırmak için geliştirilmiş bir araçtır. Redux’un sade, modern ve daha az kodla kullanılabilir halidir.

**Avantajları**

- Daha az kod 🧹
- Daha okunabilir yapı 📚
- Asenkron işlemleri kolaylaştırır(createAsyncThunk ile) ⏳

## ⚙️ Kurulum

React projen varsa direkt aşağıdaki komutla Redux Toolkit'i kurabilirsin:

```bash
npm install @reduxjs/toolkit react-redux
```

- `@reduxjs/toolkit`: Toolkit’in kendisi
- `react-redux`: React uygulamasıyla entegre olmasını sağlar

## 🧱 Temel Kavramlar

**slice:** State ve o state'e ait reducer'ları içerir

**store:** Uygulamanın tüm state'ini saklayan yerdir

**provider:** React'a store’u tanıtan bileşendir

**dispatch:** Bir aksiyon gönderme yöntemidir

---

## 🧩 1. Redux Store'u Oluşturma

```jsx
// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {}, // Slice reducer'lar buraya eklenecek
});
```

### **=>** import { configureStore } from '@reduxjs/toolkit'

🧠 Bu satırda, Redux Toolkit içindeki `configureStore` fonksiyonunu projeye dahil ediyoruz.

- `configureStore` ➡️ Redux store’u kurmak için kullanılan hazır bir fonksiyondur.

- Eski `createStore` yönteminden daha kolay ve modern bir yoldur.

- Ekstra ayarlamalar yapmadan, otomatik olarak:

  - Redux DevTools desteği 🛠️

  - Varsayılan middleware ⚙️ (örneğin `redux-thunk`)

  - Gelişmiş hata mesajları ⚠️ ile birlikte gelir.

---

### **=>** export const store = configureStore({ reducer: {} })

📦 Bu satırda, `store` adında bir Redux mağazası oluşturuyoruz ve dışa aktarıyoruz (export).

#### Parça Parça İnceleyelim:

- `store`: Tüm uygulamanın merkezi veri deposudur. (Global State)

- `configureStore({...})`: Store’u oluşturur.

- `reducer: {}`:

  - Şimdilik boş bir obje.

  - İleride burada farklı slice'lar tanımlanacak.

  - Örnek: `reducer: { counter: counterReducer }`

---

## 🧩 2. Redux Store'u Nasıl Uygulamada Ekleriz

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### **=>** Redux Store'u ve Provider'ı İçe Aktarıyoruz

```jsx
import { store } from "./app/store"; // ✅ Oluşturduğumuz Redux Store
import { Provider } from "react-redux"; // ✅ React uygulamasına store’u bağlayan bileşen
```

- `store`: Daha önce `store.js` dosyasında oluşturduğumuz Redux mağazası.
- `Provider`: React-Redux kütüphanesinden gelir ve store'u tüm React bileşenlerine **ulaşılabilir** hale getirir.

### **=>** Uygulamanın Köküne `Provider` Sarılıyor

```jsx
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
```

📌 Bu satırlarda:

- `<App />`: Uygulamanın ana bileşeni.
- `<Provider store={store}>`: Tüm React bileşenlerini bu kapsayıcı içine alarak onlara Redux store’a erişim verir.

---

## 🧩 3. Redux Slice Oluşturma

```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### **=>** createSlice Nedir?

```jsx
import { createSlice } from "@reduxjs/toolkit";
```

📦 `createSlice`, Redux Toolkit tarafından sunulan güçlü bir yardımcı fonksiyondur.
Bir slice, bir state parçasını ve o state’i güncelleyen reducer'ları kapsar.

### **=>** Başlangıç State’i Tanımlıyoruz

```jsx
const initialState = {
  value: 0,
};
```

🧠 Uygulamamızın bu kısmı için başlangıç state’imiz `value: 0`
Bu bir sayaç (counter) örneği, o yüzden sayı ile başlıyoruz.

### **=>** Slice Oluşturma

```jsx
export const counterSlice = createSlice({
  name: "counter", // 🔖 Slice’a bir isim veriyoruz
  initialState, // 🟢 Başlangıç state
  reducers: {
    // 🔁 Bu state’i değiştirecek fonksiyonlar
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
```

### 🧙‍♂️ Not: Immer Kullanımı

Normalde Redux’ta state **değiştirilemezdir (immutable)**.
Ama burada `state.value += 1` gibi doğrudan değişiklik yazabiliyoruz çünkü:

👉 Redux Toolkit, **Immer** kütüphanesini kullanır.
Immer, bu "değiştiriyor gibi görünen" kodu arka planda doğru şekilde **kopyalayıp günceller**.

### **=>** Aksiyonları ve Reducer’ı Dışa Aktarma

```jsx
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

🧩 Her reducer fonksiyonu (increment, decrement vb.) için bir aksiyon otomatik oluşturulur.

🔄 Bu reducer, store’a bağlanmak için dışa aktarılır.

---

## 🧩 4. Slice Reducer'ı Store’a Nasıl Ekleriz

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### **=>** counterReducer’ı içe aktarıyoruz

```jsx
import counterReducer from "../features/counter/counterSlice";
```

📦 Bu, az önce oluşturduğumuz `counterSlice.js` dosyasındaki reducer’dır.
`export default counterSlice.reducer` satırı sayesinde bu şekilde import edebiliyoruz.

### **=>** configureStore içine reducer'ı ekliyoruz

```jsx
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

📌 Burada ne oluyor?

- `reducer` objesinin içine `counter` adında bir alan tanımlıyoruz.
- Bu alan, **store'daki state yapısının bir parçası** olur.
- Bu sayede, store’da şu şekilde bir yapı oluşur:

```js
{
  counter: {
    value: 0;
  }
}
```

---

## 🧩 5. Nasıl Çalışır ?

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
```

### **=>** useSelector ile Redux State'ini Okumak

```jsx
const count = useSelector((state) => state.counter.value);
```

- `useSelector`: Redux store’daki state’i okumamıza yarayan React-Redux hook’u.

- `state.counter.value`: Store’daki `counter` slice'ının `value` değerini almak için kullanıyoruz. Bu, bizim sayaç değerimiz.

### **=>** `useDispatch` ile Aksiyon Göndermek

```jsx
const dispatch = useDispatch();
```

- `useDispatch`: Redux store’a **action dispatch** etmemize olanak tanır.
- `dispatch()` fonksiyonu ile bir aksiyon gönderilir ve Redux state’i güncellenir.

### **=>** Butonlara Tıklandığında Aksiyonları Göndermek

```jsx
<button
  aria-label="Increment value"
  onClick={() => dispatch(increment())}
>
  Increment
</button>

<button
  aria-label="Decrement value"
  onClick={() => dispatch(decrement())}
>
  Decrement
</button>

```

- **`increment()`** ve **`decrement()`** fonksiyonları, Redux Toolkit ile oluşturduğumuz aksiyonlardır.

- `dispatch(increment())`: `increment` aksiyonunu store’a gönderir.

- `dispatch(decrement())`: `decrement` aksiyonunu store’a gönderir.

Redux, bu aksiyonları alır, `counterSlice` reducer'ını kullanarak state’i günceller ve **React bileşeni yeniden render olur**.

---

## 🔄 Akışın Genel Özeti

1.  **Counter Bileşeni**:

    - `useSelector` ile `counter.value` değerini alır.

    - `useDispatch` ile butonlara tıklanarak `increment` ve `decrement` aksiyonları dispatch edilir.

2.  **Redux Store**:

    - Aksiyonlar, `counterSlice` tarafından işlenir.

    - Store’daki `counter` state’i güncellenir.

3.  **React Bileşeni**:

    - State güncellendikçe, `Counter` bileşeni yeniden render edilir ve ekranın ortasında güncel sayaç değeri görüntülenir.

---

# ⚛️ Redux Toolkit createAsyncThunk

Redux Toolkit, Redux kullanımını basitleştirmek ve daha etkili hale getirmek için geliştirilmiş bir araçtır. `createAsyncThunk` ise asenkron işlemleri yönetmek için kullanılan bir fonksiyondur. Bu, API çağrıları, veri yüklemeleri veya başka asenkron işlemleri yapmak için oldukça yararlı bir yapıdır.

## 🌐createAsyncThunk Kullanımı

İlk olarak, **`createAsyncThunk`** fonksiyonu ile API'den kullanıcı verilerini almak için bir asenkron işlem başlatıyoruz.

### 1. **createAsyncThunk ile Asenkron İşlem** 🤔

**createAsyncThunk ile getAllUsers fonksiyonu**

```jsx
export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
});
```

`createAsyncThunk` fonksiyonu 2 parametre alır:

1.  **Birincisi**, bu `asyncThunk`'ın adı: `"users"`. Burada bir işlem adı veriyoruz. Bu ad, Redux store'da hangi action tipiyle ilişkilendirileceğini belirler.

2.  **İkincisi**, bir **asenkron fonksiyon**. Bu fonksiyon, API çağrısını yapar ve `axios.get` ile "[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)" URL'sinden veri çeker. Bu veri daha sonra `return response.data;` ile döndürülür.

- Eğer API başarılı bir şekilde veri döndürürse, bu veri, Redux store'unda kullanılmak üzere `fulfilled` durumuyla gelir.

### 2. **createSlice ile Redux State Yönetimi** 🗃️

`createSlice` kullanarak bir **slice (kesit)** oluşturuyoruz. Slice, Redux store'undaki belirli bir state parçasını ve o state ile ilgili işlemleri tanımlar.

```jsx
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Normal reducers (Senkron işlemler için)
  },
  extraReducers: (builder) => {
    // Asenkron işlemleri yöneten reducers
    builder.addCase(getAllUsers.fulfilled, (state, responses) => {
      state.users = responses.payload;
    });
  },
});
```

- `name: "user"`: Bu slice'ın adı. Redux store'da bu state, `user` adıyla tutulacak.

- `initialState`: Slice'ın başlangıç durumu. Burada, `users` boş bir dizi ve `loading` ise `false` olarak tanımlanmış.

- `reducers`: Burada **senkron** işlemleri tanımlayabiliriz, fakat şu an herhangi bir senkron işlem tanımlamıyoruz.

- `extraReducers`: **Asenkron** işlemler (yani, API çağrıları gibi) için özel bir alan. Burada `createAsyncThunk` ile tanımladığımız asenkron işlemi yönetiyoruz.

  - `builder.addCase(getAllUsers.fulfilled, ...)`: Eğer `getAllUsers` işlemi **başarılı** (fulfilled) olursa, `state.users`'ı API'den gelen verilerle (payload) güncelliyoruz.

### 3. **Redux Store** 📦

Redux store'unu oluşturuyoruz ve burada hem **`counterSlice`** hem de **`userSlice`**'ı birleştiriyoruz.

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice"; // counterSlice'ı içe aktarıyoruz
import userReducer from "../redux/userSlice"; // userSlice'ı içe aktarıyoruz

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Counter işlemleri için reducer
    user: userReducer, // Kullanıcı verisi işlemleri için reducer
  },
});
```

`configureStore`: Redux store'unu oluştururken, `reducer` objesi içinde `counterReducer` ve `userReducer`'ı ekliyoruz. Bu, uygulamamızda hem sayacı hem de kullanıcıları yöneten reducer'lar olacak.

- `counter: counterReducer`: Counter işlemleri, `counterSlice` tarafından yönetilecek.

- `user: userReducer`: Kullanıcı verileri, `userSlice` tarafından yönetilecek.

### 4. **React Bileşeninde Veriyi Kullanma** ⚛️

```jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./redux/userSlice"; // getAllUsers thunk'ını içe aktarıyoruz

const UserList = () => {
  const dispatch = useDispatch(); // Dispatch fonksiyonunu alıyoruz
  const { users, loading } = useSelector((state) => state.user); // Kullanıcılar ve yüklenme durumu

  useEffect(() => {
    dispatch(getAllUsers()); // API'den kullanıcıları çekmek için async thunk'ı çağırıyoruz
  }, [dispatch]);

  if (loading) return <p>Yükleniyor...</p>; // Yükleniyor mesajı

  return (
    <div>
      <h2>Kullanıcılar Listesi:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // Kullanıcıları listeleyelim
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

- `useDispatch`: Redux store'undaki işlemleri tetiklemek için kullanılır.

- `useSelector`: Redux store'daki veriyi almak için kullanılır. Burada, `state.user`'ı alıyoruz, çünkü `userSlice`'ı `user` adıyla store'a ekledik.

- `useEffect`: React'ın hook'u. Bileşen yüklendiğinde API'ye bir istek gönderiyor. Bu, `dispatch(getAllUsers())` ile `getAllUsers` thunk'ını çağırarak yapılır.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
