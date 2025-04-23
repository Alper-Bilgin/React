// 1. Temel Tipler
let age: number = 25; // number tipi
let namee: string = "Ahmet"; // string tipi
let isActive: boolean = true; // boolean tipi
let emptyValue: null = null; // null tipi
let notAssigned: undefined; // undefined tipi

console.log("Yaş:", age);
console.log("İsim:", namee);
console.log("Aktif Mi?:", isActive);
console.log("Boş Değer:", emptyValue);
console.log("Atanmamış Değer:", notAssigned);

// 2. Dizi (Array) Tipi
let numbers: number[] = [1, 2, 3, 4]; // number tipi dizi
let fruits: string[] = ["apple", "banana", "cherry"]; // string tipi dizi

console.log("Sayilar:", numbers);
console.log("Meyveler:", fruits);

// 3. Tuple (Küme) Tipi
let user: [string, number] = ["Alice", 30]; // string ve number türünde bir tuple
console.log("Kullanıcı:", user);

// 4. Enum (Sıralı Küme) Tipi
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}

let favoriteColor: Color = Color.Green;
console.log("Favori Renk:", favoriteColor); // Color.Green => 2

// 5. any Tipi
let someValue: any = 42;
console.log("someValue (Başlangıçta Sayı):", someValue);

someValue = "Hello, world!"; // now it's a string
console.log("someValue (Şimdi String):", someValue);

someValue = true; // now it's a boolean
console.log("someValue (Şimdi Boolean):", someValue);

// 6. Fonksiyon ve Tipler
function greet(name: string): string {
  return `Merhaba, ${name}!`;
}

let greetingMessage: string = greet("Ahmet");
console.log(greetingMessage);

// 7. Tip Güvenliği ve Optional Parametreler
function add(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c;
  }
  return a + b;
}

console.log("Toplam (3 parametre):", add(5, 10, 15)); // 30
console.log("Toplam (2 parametre):", add(5, 10)); // 15

// 8. any Tipinin Kullanımı - Potansiyel Tehlikeler
let dynamicData: any = { name: "Ahmet", age: 30 };
console.log("Dynamic Data:", dynamicData);

dynamicData = 42; // herhangi bir türde veri atanabilir
console.log("Dynamic Data (Şimdi Sayı):", dynamicData);

// Dynamic veri üzerinde işlem yaparken TypeScript tip denetimi yapmaz.
dynamicData = "Merhaba Dünya!";
console.log("Dynamic Data (Şimdi String):", dynamicData);
