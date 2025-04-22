// 1. **Generic Types** (Generik Tipler)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Tüm veri türlerine uyum sağlayan bir fonksiyon
// Bu fonksiyon, herhangi bir türde değer alır ve aynı türde bir değer döndürür.
function getItem(value) {
    return value; // Alınan değeri aynı türde geri döndürür.
}
var numberItem = getItem(42); // number türü, getItem fonksiyonu 42 değerini alıp number döndürür.
var stringItem = getItem("Hello, TypeScript!"); // string türü, getItem fonksiyonu string döndürür.
console.log(numberItem, stringItem); // Konsola number ve string türündeki değerleri yazdırır.
// Admin tipi oluşturma
var adminUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin", // Admin rolü verildi
    permissions: ["read", "write", "execute"], // Admin izinleri belirlendi
};
// 3. **Partial** (Opsiyonel Alanlar)
// Kullanıcıyı güncelleme için opsiyonel alanlar tanımlanıyor
// Bu fonksiyon, bir kullanıcıyı güncellerken bazı alanların opsiyonel olmasını sağlar.
function updateUser(user, updates) {
    return __assign(__assign({}, user), updates); // Kullanıcıyı güncellerken yalnızca gönderilen değerler değiştirilir.
}
var existingUser = { id: 2, name: "Jane Doe", email: "jane@example.com" };
var updatedUser = updateUser(existingUser, { name: "Jane Smith" }); // Yalnızca 'name' güncelleniyor
console.log(updatedUser); // Güncellenmiş kullanıcı bilgilerini konsola yazdırır.
var newProduct = {
    id: 101,
    name: "Laptop",
    description: "High performance laptop", // Artık description zorunlu
    price: 1500,
};
console.log(newProduct); // Konsola, tüm zorunlu alanlarla oluşturulmuş yeni ürünü yazdırır.
// 5. **Readonly** (Salt Okunur Tipler)
// Salt okunur (değiştirilemez) ürün bilgileri
// `Readonly` ile bir türdeki tüm özellikleri salt okunur (readonly) hale getirebiliriz.
var readonlyProduct = {
    id: 102,
    name: "Smartphone",
    description: "Latest model",
    price: 800,
};
// readonlyProduct.price = 850; // Hata! price değeri değiştirilemez çünkü readonly olarak tanımlandı.
console.log(readonlyProduct); // Konsola, readonly özellikleri olan ürünü yazdırır.
var productPreview = { id: 103, name: "Smartwatch" };
// productPreview.description = "Description"; // Hata! 'description' mevcut değil, çünkü seçilen özelliklerden biri değil.
console.log(productPreview); // Konsola yalnızca id ve name özelliklerine sahip ürünü yazdırır.
var productWithoutDescription = {
    id: 104,
    name: "Tablet",
    price: 600,
};
console.log(productWithoutDescription); // Konsola description olmayan ürünü yazdırır.
// Siparişin toplamını hesaplamak için fonksiyon
function calculateTotal(items) {
    return items.reduce(function (total, item) { return total + item.product.price * item.quantity; }, 0); // Toplam tutarı hesaplar
}
var order = {
    user: adminUser, // Siparişi veren admin kullanıcı
    items: [
        { product: newProduct, quantity: 2 }, // 2 adet laptop
        { product: productWithoutDescription, quantity: 3 }, // 3 adet tablet
    ],
    total: calculateTotal([
        { product: newProduct, quantity: 2 }, // 2 adet laptop
        { product: productWithoutDescription, quantity: 3 }, // 3 adet tablet
    ]), // Toplam tutarı hesapla
    status: "pending", // Sipariş durumu 'pending'
};
console.log(order); // Konsola, sipariş detaylarını yazdırır.
var payment = {
    id: "pay12345", // Ödeme ID'si
    amount: 200, // Ödeme tutarı
    status: "pending", // Durum 'pending'
};
console.log(payment); // Konsola ödeme bilgilerini yazdırır.
