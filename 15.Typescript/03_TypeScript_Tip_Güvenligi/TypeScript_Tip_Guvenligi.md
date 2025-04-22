# **TypeScript’te Tip Güvenliği**

## 📌1. Interface Nedir ve Nasıl Kullanılır?

`Interface`, bir nesnenin (object) sahip olması gereken yapı (yani özellikler ve bunların tipleri) için bir şablon tanımlar. TypeScript’te özellikle nesnelerin tiplerini belirtmek için sıkça kullanılır.

### 🎯 Özellikler:

- Genişletilebilir (extends).

- Sınıflarla (class) birlikte kullanılabilir.

- Daha çok OOP yapısına uygundur.

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // Opsiyonel özellik
}

const user1: User = {
  id: 1,
  name: "Ahmet",
};

const user2: User = {
  id: 2,
  name: "Mehmet",
  email: "mehmet@example.com",
};
```

### 1. `interface User`

- `User` adında bir kullanıcı yapısı tanımlanır.

- Zorunlu: `id`, `name`

- Opsiyonel: `email` (olabilir, olmayabilir)

### 2. `const user1: User`

- `user1` bir `User` nesnesidir.

- `id` ve `name` var ✅

- `email` yok, sorun değil çünkü opsiyonel.

### 3. `const user2: User`

- `user2` de bir `User` nesnesi.

- Bu sefer `email` de verilmiş ✅

- Tüm alanlar doğru, hata yok.

---

## 📌2. `type` Alias Nedir?

`type`, TypeScript’te bir tipi yeniden adlandırmak ya da birleşik (union) veya kesişim (intersection) gibi gelişmiş tip yapıları tanımlamak için kullanılır. `interface` ile benzer işlevleri olsa da daha esnektir.

### 🎯 Özellikler:

- Union ve intersection types için uygundur.

- Primitif tipleri de kapsayabilir (`type ID = number | string`).

- `interface` gibi genişletilemez ama `&` operatörüyle birleştirilebilir.

```typescript
type ID = number | string;

type Product = {
  id: ID;
  name: string;
  price: number;
  description?: string; // Opsiyonel alan
};

const product1: Product = {
  id: 101,
  name: "Telefon",
  price: 5000,
};
```

### 1. `type ID = number | string;`

- `ID` hem sayı hem de metin olabilir.

### 2. `type Product`

- `Product` adında bir ürün tipi tanımlanır.

- Zorunlu: `id`, `name`, `price`

- Opsiyonel: `description`

### 3. `const product1: Product`

- `product1` bir `Product` nesnesidir.

- `id`, `name`, `price` doğru şekilde verilmiş.

- `description` opsiyonel olduğu için eklenmese de olur.

---

## 📌3. Opsiyonel Tipler (Optional Types)

Bir nesne içerisindeki bazı özelliklerin zorunlu olmamasını istiyorsak `?` işareti ile opsiyonel hale getirebiliriz.

Bu, özellikle API’den gelen eksik verilerle çalışırken ya da bazı alanların doldurulmasının isteğe bağlı olduğu durumlarda çok kullanışlıdır.

```typescript
interface Profile {
  username: string;
  age?: number;
}

const profile1: Profile = { username: "zeynep" };
const profile2: Profile = { username: "ayse", age: 28 };
```

### 1. `interface Profile`

- `Profile` adında bir profil yapısı tanımlanır.

- Zorunlu: `username`

- Opsiyonel: `age` (yaş olabilir, olmayabilir)

### 2. `const profile1: Profile`

- `username` var ✅

- `age` yok ama sorun değil çünkü opsiyonel.

### 3. `const profile2: Profile`

- `username` ve `age` her ikisi de verilmiş ✅

- Her şey doğru, TypeScript kabul eder.

---

## 4. Fonksiyonlarda Tip Kullanımı

Fonksiyonlarda parametrelerin ve dönüş tipinin (return type) tanımlanması, fonksiyonun beklenmedik değerlerle çalışmasını engeller.

```typescript
function greet(name: string): string {
  return `Merhaba, ${name}!`;
}

const message = greet("Alper");
console.log(message); // Merhaba, Alper!
```

```typescript
function log(message: string, userId?: number): void {
  if (userId) {
    console.log(`User ${userId}: ${message}`);
  } else {
    console.log(`Anonim kullanıcı: ${message}`);
  }
}

log("Sisteme giriş yapıldı."); // Anonim kullanıcı: Sisteme giriş yapıldı.
log("Hata oluştu", 101); // User 101: Hata oluştu
```

```typescript
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => a + b;

console.log(add(3, 5)); // 8
```

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
