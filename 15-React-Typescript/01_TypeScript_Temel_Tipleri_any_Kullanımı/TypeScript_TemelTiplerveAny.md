# **💻TypeScript Nedir?**

**TypeScript**, **JavaScript**'in üzerine eklenen, güçlü bir dil yapısı sağlayan ve Microsoft tarafından geliştirilen bir programlama dilidir. JavaScript'in tüm özelliklerini içerir, fakat **statik tip denetimi** gibi ek özelliklerle güvenli ve hatasız yazılım geliştirme süreci sunar.

## **Neden TypeScript Kullanmalı?**

- **Hata Öncesi Tespit**: JavaScript'te tür kontrolü yokken, TypeScript, yazım hatalarını ve tip uyuşmazlıklarını derleme aşamasında tespit eder. Böylece daha güvenli ve hatasız kod yazılır.

- **Büyük Projelerde Kolaylık**: TypeScript, büyük kod tabanlarında tip hatalarını önler ve kodun okunabilirliğini artırır.

---

## TypeScript’in Temel Özellikleri ✨

#### 1. **Statik Tip Kontrolü** 🛠️

TypeScript, değişkenlerin ve fonksiyonların türlerini belirleyerek hata yapma olasılığını azaltır.

```typescript
let age: number = 25; // sayısal bir değer
let name: string = "Ahmet"; // metin
```

#### 2. **Gelişmiş IDE Desteği** 🧑‍💻

TypeScript, gelişmiş kod tamamlama, hata tespiti ve yeniden refaktör etme özellikleriyle çalışma deneyiminizi iyileştirir.

#### 3. **ES6+ Özellikleri** 🚀

TypeScript, JavaScript'in son sürüm özelliklerini destekler: `async/await`, `sınıflar`, `modüller` gibi.

#### 4. **JavaScript ile Uyumluluk** 🔄

TypeScript tamamen JavaScript ile uyumludur! Geçerli bir JavaScript kodu, TypeScript içinde de çalışır.

---

## **TypeScript Nasıl Kurulur? 🛠️**

- **Node.js ve npm Yükleme**
  Öncelikle Node.js ve npm (Node Paket Yöneticisi) yüklü olmalıdır. [Node.js İndir](https://nodejs.org/)

- **TypeScript Kurulumu**
  TypeScript’i global olarak yüklemek için terminalde şu komutu yazın:

```bash
npm install -g typescript
```

---

## **TypeScript Temel Tipler 📊**

### 1. **Primitive Types (Temel Tipler)**

TypeScript'te temel tipler şunlardır:

**number:** Sayısal değerleri temsil eder.

```typescript
let age: number = 22;
let temperature: number = 36.6;
```

**string:** Metin verilerini temsil eder.

```typescript
let name: string = "Alper";
let city: string = "Trabzon";
```

**boolean:** Doğru (true) veya yanlış (false) değerini alır.

```typescript
let isActive: boolean = true;
let isCompleted: boolean = false;
```

**null:** Hiçbir değer yoksa, yani boş ise `null` kullanılır.

```typescript
let emptyValue: null = null;
```

**undefined:** Değeri henüz atanmış olmayan bir değişkeni temsil eder.

```typescript
let notAssigned: undefined;
```

### **2.Array (Dizi)**

TypeScript'te diziler için tip belirtmek gerekir. Dizinin elemanları aynı tipte olmalıdır.

```typescript
let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ["apple", "banana", "cherry"];
```

Alternatif olarak `Array<T>` şeklinde de diziler tanımlanabilir:

```typescript
let numbers: Array<number> = [1, 2, 3, 4];
```

### **3.Tuple (Küme)**

`Tuple`, farklı türdeki elemanları aynı dizide tutabilen yapıdır.

```typescript
let user: [string, number] = ["Alice", 30];
```

### **4.Enum (Sıralı Küme)**

`Enum`, bir grup sayısal veya string değerini anlamlı bir isimle gruplayan bir yapıdır.

```typescript
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}

let color: Color = Color.Green;
```

### 5. **Any (Herhangi Bir Tip)**

**`any`** tipi, TypeScript'in tip güvenliğinden feragat etmesine izin verir. Bu tip, herhangi bir türdeki veri ile çalışmanıza olanak tanır. `any` tipini kullanmak, TypeScript'in statik tür kontrolünden yararlanmanızı engeller, bu yüzden genellikle sınırlı bir şekilde kullanılmalıdır.

**`any` Tipinin Kullanım Alanları:**

- Dinamik türlerin bulunduğu durumlarda

- Hangi türün kullanılacağını bilmediğinizde

- Geçici olarak tip kontrolü yapmak istemediğinizde

```typescript
let someValue: any = 42;
someValue = "Hello, world!";
someValue = true;
```

Yukarıdaki örnekte, `someValue` başlangıçta bir sayı (42) olabilir, sonrasında bir string (`"Hello, world!"`) ve en son bir boolean (true) olabilir. TypeScript, `any` tipi ile bu tür değişimlere müdahale etmez.

### **⚠️ any Kullanımında Dikkat Edilmesi Gerekenler:**

`any` tipi kullanıldığında, TypeScript tip güvenliğini kaybettiği için hata denetimi yapılamaz. Bu, büyük projelerde hata yapmanıza neden olabilir. Mümkünse, daha spesifik tipler kullanarak güvenli kod yazmak tercih edilmelidir.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
