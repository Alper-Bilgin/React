# **Union Types, Literal Types ve Array Kullanımı**

## **Union Types (Birleşim Tipleri)**

**Union Types** (Birleşim Tipleri), bir değişkenin birden fazla tipte veri alabileceğini belirten bir özelliktir. Yani, bir değişkenin birden fazla türü alabileceğini belirlemek için, `|` (pipe) operatörü kullanılır.

### **Union Types Kullanımı**

Bir değişkenin birden fazla türde veri alabilmesini sağlamak için, türlerin arasına `|` işareti koyarız.

```typescript
let value: number | string; // value hem number hem de string olabilir
value = 42; // geçerli
value = "Hello, world!"; // geçerli
value = true; // hata! Çünkü boolean tipi geçerli değil
```

Bu örnekte, `value` değişkeni hem `number` hem de `string` tipinde değer alabilir. Ancak, başka bir tür (örneğin `boolean`) atamak hata oluşturur.

### **Birleşim Tipleri ile Fonksiyonlar**

Birleşim tipleri fonksiyonlarda da kullanılabilir. Bu, fonksiyonun farklı türde parametreler almasını sağlar.

```typescript
function printId(id: number | string): void {
  console.log("ID:", id);
}

printId(101); // geçerli
printId("abc123"); // geçerli
printId(true); // hata! boolean tipi geçerli değil
```

Burada `id` parametresi hem `number` hem de `string` türünde olabilir. Fonksiyon buna göre çalışacaktır.

### **Birleşim Tiplerinin Faydaları**

- **Esneklik sağlar**: Bir değişkenin farklı veri türlerinde değerler alabilmesini sağlar.

- **Tip güvenliğini korur**: Kodunuzun hata yapma olasılığını azaltır çünkü TypeScript, belirtilen türler dışında bir değer kullanılmasına izin vermez.

---

## **Literal Types (Literal Tipleri)**

**Literal Types**, belirli bir değeri temsil eden özel türlerdir. Yani, bir değişkenin sadece belirli bir değeri almasına izin veririz. Bununla, yalnızca belirli sabit değerlere sahip değişkenler oluşturabiliriz.

### **Literal Types Kullanımı**

Bir literal tipi tanımlamak için, değişkenin değerini belirli bir sabit değerle eşleştiririz.

```typescript
let direction: "left" | "right"; // direction yalnızca "left" veya "right" olabilir
direction = "left"; // geçerli
direction = "right"; // geçerli
direction = "up"; // hata! "up" değeri geçerli değil
```

Burada `direction` sadece `"left"` ya da `"right"` değerini alabilir. Başka bir değer atamaya çalıştığınızda TypeScript hata verecektir.

### **Literal Types ve Union Types**

Birleşim tipleri ve literal tipleri birlikte kullanabiliriz. Bu, daha esnek ve belirli değerlerle kısıtlanmış değişkenler yaratmamızı sağlar.

```typescript
let userStatus: "active" | "inactive" | "banned";
userStatus = "active"; // geçerli
userStatus = "banned"; // geçerli
userStatus = "pending"; // hata! "pending" değeri geçerli değil
```

Burada `userStatus` sadece `"active"`, `"inactive"` veya `"banned"` değerlerini alabilir.

### **Literal Types'in Faydaları**

- **Daha fazla doğrulama sağlar**: Sadece belirli değerlerin kullanılmasını sağlamak için kullanılır.

- **Kodun okunabilirliğini artırır**: Kısıtlamalar koyarak kodun ne tür değerler alacağını netleştirir.

---

## **Array Kullanımı**

TypeScript'te **diziler** kullanmak, verilerin sıralı bir şekilde saklanmasını sağlar. Dizilerdeki her elemanın türünü belirleyebiliriz. TypeScript, dizilere veri türü kısıtlaması ekleyerek, yanlış türde veri eklenmesini engeller.

### **Temel Dizi Kullanımı**

Bir diziyi tanımlarken, her elemanın tipi belirlenebilir.

```typescript
let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ["apple", "banana", "cherry"];
```

Bu örnekte:

- `numbers` sadece sayılar (`number[]`) içerebilir.

- `fruits` sadece string (`string[]`) türünden değerler içerebilir.

### **Array'nin Genel Tipi**

Dizilerin genel tipini belirtmek için `Array<T>` sözdizimini de kullanabiliriz.

```typescript
let numbers: Array<number> = [1, 2, 3, 4];
let fruits: Array<string> = ["apple", "banana", "cherry"];
```

### **Dizi Elemanlarına Erişim**

Dizi elemanlarına, JavaScript'teki gibi dizinin indeksleriyle erişebiliriz.

```typescript
let numbers: number[] = [10, 20, 30, 40];
console.log(numbers[0]); // 10
console.log(numbers[2]); // 30
```

### **Dizi İçindeki Farklı Tipler**

Dizilerde sadece belirli bir türdeki elemanların bulunmasını sağlayabileceğimiz gibi, aynı zamanda dizide birden fazla türü de kabul edebiliriz. Bunun için **Tuple** (Küme) kullanabiliriz.

```typescript
let mixedArray: [number, string, boolean] = [42, "Hello", true];
console.log(mixedArray); // [42, "Hello", true]
```

Bu örnekte `mixedArray`, sırasıyla bir `number`, bir `string` ve bir `boolean` elemanı içeriyor. Ancak, dizinin her elemanının tipi sabittir ve belirli bir sırayla yer almalıdır.

---

**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**
