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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Sepete ürün ekleyen fonksiyonun kendisi.
// Eğer ürün sepette varsa miktarını artırır.
// Yoksa ürünü sepete yeni bir öğe olarak ekler.
// quantity verilmezse varsayılan olarak 1 kabul edilir.
var addToCart = function (cart, product, quantity) {
    if (quantity === void 0) { quantity = 1; }
    var existingItem = cart.find(function (item) { return item.product.id === product.id; });
    if (existingItem) {
        // Ürün zaten sepetteyse, miktarını artır
        return cart.map(function (item) { return (item.product.id === product.id ? __assign(__assign({}, item), { quantity: item.quantity + quantity }) : item); });
    }
    // Ürün sepette yoksa, yeni bir öğe olarak ekle
    return __spreadArray(__spreadArray([], cart, true), [{ product: product, quantity: quantity }], false);
};
// Siparişin toplam tutarını hesaplayan fonksiyon.
// Her ürünün fiyatı ile miktarı çarpılır ve tüm ürünler toplanır.
function calculateTotal(items) {
    return items.reduce(function (total, item) { return total + item.product.price * item.quantity; }, 0);
}
// Örnek bir kullanıcı oluşturuluyor.
// phone alanı verilmemiş, çünkü opsiyonel.
var user = {
    id: 1,
    name: "Alper Bilgin",
    email: "alper@bilgin.com",
    role: "customer",
};
// Örnek ürünler tanımlanıyor.
// productA açıklama içeriyor, productB içermiyor.
var productA = {
    id: 1001,
    name: "Kablosuz Kulaklık",
    price: 1500,
    stock: 25,
    description: "Bluetooth 5.0, uzun pil ömrü",
};
var productB = {
    id: 1002,
    name: "Laptop",
    price: 12000,
    stock: 10,
};
// Boş bir sepet oluşturuluyor.
var cart = [];
// Sepete ürünler ekleniyor.
// productA iki kez ekleniyor; ikinci ekleme miktarı artırıyor.
cart = addToCart(cart, productA, 2); // 2 adet kulaklık
cart = addToCart(cart, productB); // 1 adet laptop
cart = addToCart(cart, productA, 1); // 1 kulaklık daha → toplam 3 kulaklık
// Yeni bir sipariş oluşturuluyor.
// Kullanıcının id'si, sepet, hesaplanmış toplam tutar ve sipariş durumu ile birlikte.
var order = {
    id: "ORD-0001",
    userId: user.id,
    items: cart,
    total: calculateTotal(cart),
    status: "pending",
};
// Sipariş bilgileri konsola yazdırılıyor.
console.log("Sipariş Özeti:");
console.log("M\u00FC\u015Fteri: ".concat(user.name));
console.log("\u00DCr\u00FCn Say\u0131s\u0131: ".concat(order.items.length));
console.log("Toplam Tutar: \u20BA".concat(order.total));
console.log("Sipari\u015F Durumu: ".concat(order.status));
