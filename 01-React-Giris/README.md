# REACT PROJESİ OLUŞTURMA

## 1. Node.js Kurulu mu Kontrol Et

- Kontrol etmek için terminal veya komut satırına yaz:

```bash
node -v
```

- Eğer bir sürüm çıkıyorsa (örneğin `v18.17.0` gibi), kurulu demektir.

- Eğer kurulu değilse, [Node.js Resmi Sitesi](https://nodejs.org/) üzerinden kurulum yapabilirsin.

## 2. Projeyi Oluştur

```bash
npm create vite@latest
```

Ardından senden bazı bilgileri isteyecek:

- **Project name**: Projenin klasör adı (örneğin: `my-react-app`)

- **Select a framework**: `React` seç

- **Select a variant**: `JavaScript` ya da `TypeScript` (hangisini kullanmak istersen)

## 3.Proje Klasörüne Gir

```bash
cd my-react-app
```

## 4. Node Modüllerini Yükle

```bash
npm install
```

#### 🔍 Bu komut ne yapar?

- Projenin kök dizininde bulunan **package.json** dosyasını okur.

- Bu dosyada tanımlı olan tüm bağımlılıkları (örneğin React, Vite, vb.) internetten indirir.

- İndirilen tüm bu bağımlılıkları bir klasörde toplar: **node_modules/**

#### 📁 `node_modules` nedir?

- `node_modules`, projende kullandığın tüm kütüphane ve paketlerin fiziksel olarak bulunduğu klasördür.

- Bu klasör çok büyük olabilir, çünkü her bağımlılık kendi içinde başka bağımlılıklara sahip olabilir.

- Bu klasör **otomatik oluşturulur**, elle oluşturmazsın veya düzenlemezsin.

#### 🧠 Ekstra Bilgi: `package-lock.json` ne işe yarar?

- `npm install` komutu aynı zamanda `package-lock.json` dosyasını da günceller.

- Bu dosya, indirilen tüm paketlerin **tam sürümlerini** kilitler. Böylece projeyi bir başkası yüklediğinde de aynı sürümlerle çalışır.

## 5. Geliştirme Sunucusunu Başlat

```bash
npm run dev
```

Bu komuttan sonra terminalde sana bir bağlantı verecek (genelde `http://localhost:5173`). Tarayıcında açarak projenin çalıştığını görebilirsin.

---

<**_[Alper BİLGİN](https://github.com/Alper-Bilgin)_**>
