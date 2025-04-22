// 1. Temel Tipler
var age = 25; // number tipi
var namee = "Ahmet"; // string tipi
var isActive = true; // boolean tipi
var emptyValue = null; // null tipi
var notAssigned; // undefined tipi
console.log("Yaş:", age);
console.log("İsim:", namee);
console.log("Aktif Mi?:", isActive);
console.log("Boş Değer:", emptyValue);
console.log("Atanmamış Değer:", notAssigned);
// 2. Dizi (Array) Tipi
var numbers = [1, 2, 3, 4]; // number tipi dizi
var fruits = ["apple", "banana", "cherry"]; // string tipi dizi
console.log("Sayilar:", numbers);
console.log("Meyveler:", fruits);
// 3. Tuple (Küme) Tipi
var user = ["Alice", 30]; // string ve number türünde bir tuple
console.log("Kullanıcı:", user);
// 4. Enum (Sıralı Küme) Tipi
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log("Favori Renk:", favoriteColor); // Color.Green => 2
// 5. any Tipi
var someValue = 42;
console.log("someValue (Başlangıçta Sayı):", someValue);
someValue = "Hello, world!"; // now it's a string
console.log("someValue (Şimdi String):", someValue);
someValue = true; // now it's a boolean
console.log("someValue (Şimdi Boolean):", someValue);
// 6. Fonksiyon ve Tipler
function greet(name) {
    return "Merhaba, ".concat(name, "!");
}
var greetingMessage = greet("Ahmet");
console.log(greetingMessage);
// 7. Tip Güvenliği ve Optional Parametreler
function add(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
console.log("Toplam (3 parametre):", add(5, 10, 15)); // 30
console.log("Toplam (2 parametre):", add(5, 10)); // 15
// 8. any Tipinin Kullanımı - Potansiyel Tehlikeler
var dynamicData = { name: "Ahmet", age: 30 };
console.log("Dynamic Data:", dynamicData);
dynamicData = 42; // herhangi bir türde veri atanabilir
console.log("Dynamic Data (Şimdi Sayı):", dynamicData);
// Dynamic veri üzerinde işlem yaparken TypeScript tip denetimi yapmaz.
dynamicData = "Merhaba Dünya!";
console.log("Dynamic Data (Şimdi String):", dynamicData);
