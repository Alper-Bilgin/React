# **🧩TODO Projei**

## 📁 Dosya: App.js

Bu dosya, uygulamanın ana bileşeni. 🏠 Burada tüm todo işlemleri yönetilir: **ekleme**, **silme** ve **güncelleme**.

```jsx
import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
```

## 🔧 State Tanımı

```jsx
const [todos, setTodos] = useState([]);
```

🧠 **todos**: Tüm yapılacaklar listesi burada tutulur. Başlangıçta boş bir array olarak tanımlanır.

## ✅ Todo Ekleme Fonksiyonu

```jsx
const createTodo = (newTodo) => {
  setTodos([...todos, newTodo]);
};
```

➕ Yeni bir todo eklendiğinde, mevcut `todos` dizisine `newTodo` eklenir. `...todos` eski todo’ları kopyalar, sonra yenisi eklenir.

## ❌ Todo Silme Fonksiyonu

```jsx
const removeTodo = (todoId) => {
  setTodos([...todos.filter((todo) => todo.id !== todoId)]);
};
```

🧹 `filter()` fonksiyonu ile, verilen `todoId` dışındaki todo’lar listede bırakılır, böylece silme işlemi yapılır.

## 📝 Todo Güncelleme Fonksiyonu

```jsx
const updateTodo = (newTodo) => {
  const updatedTodos = todos.map((todo) => {
    if (todo.id !== newTodo.id) {
      return todo;
    }
    return newTodo;
  });
  setTodos([...updatedTodos]);
};
```

🔄 Güncelleme işlemi için, aynı `id`’ye sahip todo bulunur ve yerine yenisi konur.

## 📦 JSX Yapısı

```jsx
<TodoCreate onCreateTodo={createTodo} />
<TodoList
  todos={todos}
  onRemoveTodo={removeTodo}
  onUpdateTodo={updateTodo}
/>
```

🧩 `TodoCreate` ➕ todo oluşturma 🧩 `TodoList` ✅ tüm todo’ların listelenmesi

---

## 📁 Dosya: TodoCreate.js

Bu bileşen yeni bir todo oluşturmak için form alanı sunar. 🧾

```jsx
const [newTodo, setNewTodo] = useState("");
```

## ➕ Todo Oluşturma

```jsx
const createTodo = () => {
  if (!newTodo) return;
  const request = {
    id: Math.floor(Math.random() * 99999999999),
    content: newTodo,
  };
  onCreateTodo(request);
  clearInput();
};
```

🧠 Fonksiyon açıklaması:

- `newTodo` boşsa işlem yapılmaz.

- Rastgele `id` oluşturulur.

- Yeni todo nesnesi (`id` ve `content`) ana bileşene gönderilir (`onCreateTodo`).

- Input alanı temizlenir (`clearInput()`).

---

## 📁 Dosya: TodoList.js

Bu bileşen, todos listesini ekranda gösterir. 🧮

```jsx
{
  todos &&
    todos.map((todo) => (
      <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
    ));
}
```

🧱 Her `todo` için bir `<Todo />` bileşeni oluşturulur. 🧠 Her bileşen `id`’sine göre benzersiz olarak tanımlanır (`key`).

---

## 📁 Dosya: Todo.js

Bireysel todo’yu temsil eder. ✅ Silme ve düzenleme ikonları burada bulunur.

## 🧠 Local State’ler:

```jsx
const [editable, setEditable] = useState(false);
const [newTodo, setNewTodo] = useState(content);
```

- `editable`: todo yazısı input haline mi geldi? (true/false)

- `newTodo`: güncellenmekte olan içerik

## 🛠️ Silme Fonksiyonu

```jsx
const removeTodo = () => {
  onRemoveTodo(id);
};
```

🗑️ `id`’yi parent bileşene göndererek silme işlemi yapılır.

## ♻️ Güncelleme Fonksiyonu

```jsx
const updateTodo = () => {
  const request = {
    id: id,
    content: newTodo,
  };
  onUpdateTodo(request);
  setEditable(false);
};
```

✏️ Güncelleme yapılır ve editable modundan çıkılır.

## 👁️ Görünüm

```jsx
{
  editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> : content;
}
```

## 👀 Eğer editable true ise input alanı gösterilir, değilse yazı sabit olarak görünür.

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
