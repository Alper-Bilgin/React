# **TypeScript: Gelişmiş Tip Özellikleri**

## 1. **Generic Types (Generik Tipler)**

Generik tipler, fonksiyonlar, sınıflar ve arayüzler gibi yapıların farklı türlerde veri ile çalışabilmesini sağlar. Bu, aynı fonksiyon veya sınıfın farklı veri türlerine göre yeniden kullanılabilmesini sağlar.

### 🎯 Özellikler:

- Tipler, fonksiyon çağrıldığında veya sınıf örneği oluşturulduğunda belirlenir.

- Tek bir fonksiyon veya sınıf, farklı türler üzerinde çalışabilir.

```typescript
// Generic type ile fonksiyon
function identity<T>(value: T): T {
  return value;
}

let numberValue = identity(42); // number
let stringValue = identity("Hello"); // string
```

Burada, `T` her çağrıldığında bir tür parametresi olarak belirlenir. `identity` fonksiyonu, hangi türde veri verilirse, o türde bir değer döndüren bir fonksiyon olur.

```typescript
// Generic interface ile daha geniş kullanım
interface ApiResponse<T> {
  data: T;
  error: string | null;
}

const response: ApiResponse<number> = {
  data: 200,
  error: null,
};

const stringResponse: ApiResponse<string> = {
  data: "Success",
  error: null,
};
```

- **Generic Interface Tanımı:**

  - **Generic** (genel) arayüzler, bir türün yerine kullanılacak bir **placeholder** (`T`) tanımlar. Bu tür, arayüzün kullanıldığı yerde **gerçek** bir tür ile değiştirilir.

  - Bu, bir arayüzün farklı veri türleri ile tekrar tekrar kullanılmasına olanak sağlar.

  - Örneğin, `ApiResponse<T>` arayüzü, `T` yerine sayı, metin, nesne veya başka bir tür alabilir.

- **ApiResponse Yapısı:**

  - Bu arayüz iki ana özelliğe sahiptir:

    - **data**: Bu özellik, `T` türündeki veriyi saklar. `T` ne türde bir veri olursa, `data` da o türde olur.

    - **error**: Hata mesajını tutar. Bu özellik ya bir **string** (hata mesajı) olur ya da **null** olabilir (hata yoksa).

- **Farklı Türlerle Kullanım:**

  - **ApiResponse<number>** örneğinde, `T` yerine **sayı** (`number`) türü kullanılmıştır. Yani `data` bir sayı olmalıdır.

  - **ApiResponse<string>** örneğinde ise `T` yerine **metin** (`string`) türü kullanılmıştır. Yani `data` bir metin olmalıdır.

- **Esneklik ve Tekrar Kullanılabilirlik:**

  - Generic yapılar, aynı arayüzün farklı türlerle kullanılmasını sağlar. Bu, yazılımda **tekrar kullanılabilirliği** artırır ve kodun daha **esnek** olmasını sağlar.

  - Aynı arayüz, sayılarla çalışırken, metinlerle çalışırken ya da başka veri türleriyle çalışırken aynı şekilde işlevsel olur.

- **Avantajlar:**

  - **Type Safety**: Yanlış veri türlerinin kullanılmasını engeller. Örneğin, `number` beklerken bir metin (`string`) gönderirseniz, TypeScript hata verir.

  - **Genel ve Esnek Yapılar**: Farklı veri türleriyle uyumlu hale getirilen yapılar, yazılımın daha sağlam ve sürdürülebilir olmasını sağlar.

---

## 2. **Extending Types (Tipleri Genişletme)**

Bir tipi genişletmek, bir tipin özelliklerini başka bir tipe eklemek anlamına gelir. Bu, mevcut tiplerin üzerine ek özellikler eklemeyi sağlar.

### 🎯 Özellikler:

- `extends` anahtar kelimesiyle yapılır.

- Diğer tiplerin özelliklerini kullanarak yeni tipler oluşturabiliriz.

```typescript
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  age: 4,
  breed: "Golden Retriever",
};
```

### 1. **`Animal` Arayüzü:**

- **`Animal`** arayüzü, temel hayvan özelliklerini tanımlar.

- İki zorunlu özellik içerir:

  - **`name`**: Hayvanın adı, bir **string**.

  - **`age`**: Hayvanın yaşı, bir **number**.

### 2. **`Dog` Arayüzü - `extends` ile Miras Alma:**

- **`Dog`** arayüzü, **`Animal`** arayüzünden **miras** alır. Bu, `Dog` arayüzünün `Animal` arayüzündeki tüm özellikleri (name ve age) içereceği anlamına gelir.

- **`extends`** anahtar kelimesi, `Dog`'un `Animal`'dan türediğini belirtir.

- `Dog` arayüzü, `Animal` arayüzündeki `name` ve `age` özelliklerini miras alır ve bunun dışında **`breed`** adında yeni bir özellik ekler.

  - **`breed`**: Köpeğin cinsini belirtir, bir **string**.

### 3. **`myDog` Nesnesi:**

- **`myDog`** değişkeni, **`Dog`** tipinde bir nesne oluşturur.

- `myDog` nesnesi, `Dog` arayüzüne uygun şekilde üç özellik içerir:

  - **`name`**: "Buddy" (köpeğin adı).

  - **`age`**: 4 (köpeğin yaşı).

  - **`breed`**: "Golden Retriever" (köpeğin cinsi).

---

## 3. **Partial (Kısmi Tipler)**

`Partial`, bir tipin tüm özelliklerini opsiyonel hale getirir. Bu, bir nesne oluşturulurken, nesnenin tüm özelliklerini sağlamak zorunda olmadığımız durumlarda kullanılır.

### 🎯 Özellikler:

- Tüm özellikler opsiyonel hale gelir.

- Kullanıcıya bir nesne ile çalışırken esneklik sağlar.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser = (user: User, updates: Partial<User>): User => {
  return { ...user, ...updates };
};

const user: User = { id: 1, name: "Alper", email: "Alper@example.com" };

const updatedUser = updateUser(user, { name: "Ahmet" }); // Sadece 'name' güncellenir
```

### 1. **`User` Arayüzü:**

- **`User`** arayüzü, bir kullanıcının temel özelliklerini tanımlar.

- Bu özellikler şunlardır:

  - **`id`**: Kullanıcının kimliği, bir **number**.

  - **`name`**: Kullanıcının adı, bir **string**.

  - **`email`**: Kullanıcının e-posta adresi, bir **string**.

---

### 2. **`updateUser` Fonksiyonu:**

- **`updateUser`** fonksiyonu, mevcut bir kullanıcıyı (`user`) ve yapılacak güncellemeleri (`updates`) alır.

- Fonksiyon, `user` nesnesinin üzerine **güncellenen özellikleri** ekler ve **yeni bir kullanıcı nesnesi** döner.

  - **`Partial<User>`**: Bu, `User` arayüzünün **tamamlanmamış** (partial) versiyonunu ifade eder. Yani, `updates` nesnesi sadece `User` arayüzündeki bazı özellikleri içerebilir. Örneğin, tüm özellikleri güncellenmek zorunda değildir; sadece bazıları verilebilir.

  - **Spread Operatörü (`...`)**: `...user` ile mevcut kullanıcının özellikleri alınır ve `...updates` ile gelen güncellemelerle birleştirilir. Bu sayede, yalnızca güncellenen alanlar değiştirilir, diğer alanlar olduğu gibi kalır.

---

### 3. **`user` Nesnesi:**

- **`user`** nesnesi, **`User`** tipine uygun olarak tanımlanmış bir kullanıcıyı temsil eder:

  - **`id: 1`**: Kullanıcının kimliği.

  - **`name: "Alper"`**: Kullanıcının adı.

  - **`email: "Alper@example.com"`**: Kullanıcının e-posta adresi.

---

### 4. **`updatedUser` Nesnesi:**

- **`updatedUser`** nesnesi, `updateUser` fonksiyonu aracılığıyla **`user`** nesnesinin güncellenmiş hAlperdir.

- **`updateUser(user, { name: "Ahmet" })`** çağrısı, sadece `name` özelliğini günceller. Yani:

  - `name` değeri "Alper"den "Ahmet"e değişir.

  - `id` ve `email` özellikleri ise değiştirilmeden kalır.

---

## 5. **Readonly (Salt Okunur Tipler)**

`Readonly`, bir tipin tüm özelliklerini sadece okunabilir hale getirir. Yani, bir nesne oluşturulduktan sonra bu nesnenin özelliklerini değiştiremeyiz.

### 🎯 Özellikler:

- Tüm özellikler sadece okunabilir hale gelir, değiştirilemez.

```typescript
interface User {
  id: number;
  name: string;
}

const user: Readonly<User> = { id: 1, name: "Alper" };

// user.id = 2; // Hata! 'id' özelliği readonly
```

### 1. **`User` Arayüzü:**

- **`User`** arayüzü, bir kullanıcıya ait temel özellikleri tanımlar.

  - **`id`**: Kullanıcının kimliği, bir **number** türünde.

  - **`name`**: Kullanıcının adı, bir **string** türünde.

---

### 2. **`Readonly<User>`:**

- **`Readonly<T>`**: Bu, TypeScript'in sağladığı bir **utility type**'ıdır. `T` tipindeki tüm özelliklerin **sadece okunabilir** olmasını sağlar.

- **`Readonly<User>`**: Burada, `User` tipi bir `Readonly` tipiyle çevrilmiştir. Bu, `User` arayüzündeki tüm özelliklerin **değiştirilemez** (readonly) olduğunu belirtir.

  - Yani, `id` ve `name` özellikleri yalnızca okunabilir hale gelir ve bu özellikler herhangi bir şekilde değiştirilemez.

---

### 3. **`user` Nesnesi:**

- **`user`** nesnesi, `Readonly<User>` tipinde bir kullanıcıyı temsil eder.

- Bu nesne şu şekilde tanımlanmıştır:

  - **`id: 1`**: Kullanıcının kimliği, 1.

  - **`name: "Alper"`**: Kullanıcının adı, "Alper".

- Çünkü `user` nesnesi **`Readonly<User>`** olarak tanımlanmış, bu özelliklerin değerleri **değiştirilemez**.

---

### 4. **Değişkeni Değiştirmeye Çalışmak:**

- **`user.id = 2;`** satırı **yorum satırına alınmış** ama açıklayalım:

  - Eğer bu satır aktif olsaydı, **`user.id`** değerini değiştirmeye çalıştığınızda TypeScript hata verir.

  - Çünkü `Readonly<User>` tipindeki bir nesnenin özellikleri **sadece okunabilir** ve **değiştirilemez**. `id` özelliği zaten `readonly` olduğundan, buna yeni bir değer atamak mümkün olmaz.

---

## 6. **Pick (Belirli Alanları Seçme)**

`Pick`, bir tipin sadece belirli özelliklerini seçmek için kullanılır. Bu özellik, mevcut tipin bir alt kümesini oluşturur.

### 🎯 Özellikler:

- Belirli alanları seçmek için kullanılır.

- `Pick<T, K>` şeklinde kullanılır. `T` tip, `K` ise seçilecek özelliklerin bir türüdür.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, "name" | "email">;

const preview: UserPreview = { name: "Alper", email: "Alper@example.com" };
// preview.id = 1; // Hata! 'id' 'UserPreview' tipinde yok
```

### 1. **`User` Arayüzü:**

- **`User`** arayüzü, bir kullanıcının sahip olduğu özellikleri tanımlar:

  - **`id`**: Kullanıcının kimliği, bir **number** türünde.

  - **`name`**: Kullanıcının adı, bir **string** türünde.

  - **`email`**: Kullanıcının e-posta adresi, bir **string** türünde.

---

### 2. **`UserPreview` Tipi:**

- **`Pick<T, K>`**: Bu, TypeScript'in sağladığı bir **utility type**'ıdır. `Pick`, bir türün (bu örnekte `User` tipi) sadece belirtilen özelliklerini seçmek için kullanılır.

- **`UserPreview`**: `Pick<User, "name" | "email">` ifadesiyle, `User` arayüzünün yalnızca **`name`** ve **`email`** özellikleri seçilmiştir. Bu, `UserPreview` tipinin yalnızca `name` ve `email` özelliklerine sahip olduğu anlamına gelir.

  - **`UserPreview`** tipi, `User` arayüzündeki `id` özelliğinden **yoksundur**.

---

### 3. **`preview` Nesnesi:**

- **`preview`** değişkeni, `UserPreview` tipinde tanımlanmıştır.

- `preview` nesnesi şu şekilde tanımlanmış:

  - **`name: "Alper"`**: Kullanıcının adı, "Alper".

  - **`email: "Alper@example.com"`**: Kullanıcının e-posta adresi, "Alper@example.com".

- `preview` nesnesi, yalnızca `UserPreview` tipindeki `name` ve `email` özelliklerine sahip olduğu için `id` özelliği eksiktir.

---

### 4. **`id` Özelliğini Değiştirmeye Çalışmak:**

- **`preview.id = 1;`** satırı **yorum satırına alınmış** ama açıklayalım:

  - Eğer bu satır aktif olsaydı, **TypeScript hata verir**.

  - Çünkü `preview` nesnesi, `UserPreview` tipinde tanımlandığı için yalnızca **`name`** ve **`email`** özelliklerini içerir.

  - `id` özelliği **`UserPreview`** tipinde **bulunmaz**. Bu nedenle `id` özelliğine değer atamaya çalıştığınızda TypeScript, bunun geçerli bir işlem olmadığını belirterek hata verir.

---

## 7. **Omit (Belirli Alanları Hariç Tutma)**

`Omit`, bir tipin belirli özelliklerini hariç tutmak için kullanılır. Bu, mevcut bir tipin alt kümesini oluşturur, ancak belirli özellikleri çıkarır.

### 🎯 Özellikler:

- Bir türün belirli özelliklerini hariç tutarak yeni bir tür oluşturur.

- `Omit<T, K>` şeklinde kullanılır. `T` tipi ve `K` hariç tutulacak özelliklerin bir türüdür.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserWithoutEmail = Omit<User, "email">;

const userWithoutEmail: UserWithoutEmail = { id: 1, name: "Alper" };
// userWithoutEmail.email = "Alper@example.com"; // Hata! 'email' yok
```

### 1. **`User` Arayüzü:**

- **`User`** arayüzü, bir kullanıcının sahip olduğu temel özellikleri tanımlar:

  - **`id`**: Kullanıcının kimliği, bir **number** türünde.

  - **`name`**: Kullanıcının adı, bir **string** türünde.

  - **`email`**: Kullanıcının e-posta adresi, bir **string** türünde.

---

### 2. **`UserWithoutEmail` Tipi:**

- **`Omit<T, K>`**: Bu, TypeScript'in sağladığı bir **utility type**'ıdır. `Omit`, bir türden (bu örnekte `User` tipi) belirli özellikleri **çıkarır**.

- **`UserWithoutEmail`**: `Omit<User, "email">` ifadesiyle, `User` arayüzündeki **`email`** özelliği çıkarılmıştır. Yani, `UserWithoutEmail` tipi, `User` arayüzündeki `id` ve `name` özelliklerine sahip olur, ancak `email` özelliği **bulunmaz**.

---

### 3. **`userWithoutEmail` Nesnesi:**

- **`userWithoutEmail`** değişkeni, **`UserWithoutEmail`** tipinde tanımlanmıştır.

- `userWithoutEmail` nesnesi şu şekilde tanımlanmış:

  - **`id: 1`**: Kullanıcının kimliği, 1.

  - **`name: "Alper"`**: Kullanıcının adı, "Alper".

- Bu nesne, `User` arayüzünün yalnızca **`id`** ve **`name`** özelliklerine sahip olup **`email`** özelliği **görünmemektedir**.

---

### 4. **`email` Özelliğini Değiştirmeye Çalışmak:**

- **`userWithoutEmail.email = "Alper@example.com";`** satırı **yorum satırına alınmış** ama açıklayalım:

  - Eğer bu satır aktif olsaydı, **TypeScript hata verir**.

  - Çünkü `userWithoutEmail` nesnesi **`UserWithoutEmail`** tipinde tanımlandığı için **`email`** özelliği yoktur.

  - Bu nedenle `email` özelliğine değer atamaya çalıştığınızda TypeScript, bunun geçerli bir işlem olmadığını belirterek hata verir.

---

| Özellik      | Açıklama                                                                                | Kullanım                                |
| ------------ | --------------------------------------------------------------------------------------- | --------------------------------------- |
| **Generic**  | Bir fonksiyon veya sınıfın türünü parametre olarak alır ve farklı türlerle çalışabilir. | `T` parametresi ile esneklik sağlar.    |
| **Extends**  | Mevcut bir tipi genişleterek yeni bir tip oluşturur.                                    | `extends` anahtar kelimesi ile yapılır. |
| **Partial**  | Bir tipin tüm özelliklerini opsiyonel hale getirir.                                     | `Partial<T>` kullanılır.                |
| **Required** | Bir tipin tüm özelliklerini zorunlu hale getirir.                                       | `Required<T>` kullanılır.               |
| **Readonly** | Bir tipin tüm özelliklerini sadece okunur hale getirir.                                 | `Readonly<T>` kullanılır.               |
| **Pick**     | Bir tipin belirli özelliklerini seçerek yeni bir tip oluşturur.                         | `Pick<T, K>` kullanılır.                |
| **Omit**     | Bir tipin belirli özelliklerini hariç tutar.                                            | `Omit<T, K>` kullanılır.                |

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
