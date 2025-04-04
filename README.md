## 📌 Node.js Notlar Uygulaması

Bu proje, **Node.js** ve **fs (File System)** modülü kullanılarak geliştirilen bir komut satırı uygulamasıdır. Uygulama, `notlar.json` adlı bir dosya üzerinde not ekleme, listeleme ve silme işlemlerini gerçekleştirmektedir.

---

## 📋 Proje Açıklaması

Bu uygulama ile:

- ✅ Terminalden girilen veri, otomatik artan bir ID ile `notlar.json` içine kaydedilir.
- ✅ Tüm notlar listelenebilir.
- ✅ Belirli bir ID’ye sahip not silinebilir.
- ✅ Uygulama hata durumlarını `try/catch` bloklarıyla yönetir.
- ✅ Eğer `notlar.json` dosyası yoksa, uygulama tarafından otomatik oluşturulur.

---

## 🛠 Kullanılan Teknolojiler

- Node.js
- `fs` (File System) modülü

---

## ⚙️ Kurulum

### 1️⃣ Node.js Kurulumu

Node.js bilgisayarınızda kurulu değilse aşağıdaki bağlantıdan indirip kurabilirsiniz:  
🔗 [Node.js İndirme Sayfası](https://nodejs.org/)

---

### 2️⃣ Projeyi Klonlayın

GitHub üzerinden projeyi bilgisayarınıza indirin:

```bash
git clone https://github.com/BerkeCoruk/nodejs-notlar-uygulamasi.git
cd nodejs-notlar-uygulamasi
```
---

## 🚀 Kullanım Yönergeleri

### 📌 Yeni Not Ekleme

Yeni bir not eklemek için terminale şu komutu girin:

```bash
node index.js ekle "Not metniniz buraya gelecek"
```

**Örnek:**

```bash
node index.js ekle "Bu benim ilk notum!"
```

Bu işlem sonrasında `notlar.json` dosyasına aşağıdaki gibi bir içerik yazılacaktır:

```json
[
  { "id": 1, "not": "Bu benim ilk notum!" }
]
```

---

### 📌 Tüm Notları Listeleme

Tüm kayıtlı notları listelemek için şu komutu çalıştırın:

```bash
node index.js listele
```

**Örnek Çıktı:**

```
1 - Bu benim ilk notum!
2 - İkinci not burada!
```

---

### 📌 Belirli Bir Notu Silme (ID ile)

Belirli bir ID’ye sahip notu silmek için şu komutu kullanın:

```bash
node index.js sil <id>
```

**Örnek:**

```bash
node index.js sil 1
```

Bu işlemden sonra `notlar.json` güncellenir ve ID’si 1 olan not silinir.

---

## 🧪 Örnek Çalışma Senaryosu

### 1️⃣ Not Ekleme

```bash
node index.js ekle "Not 1"
node index.js ekle "Not 2"
```

**notlar.json:**

```json
[
  { "id": 1, "not": "Not 1" },
  { "id": 2, "not": "Not 2" }
]
```

---

### 2️⃣ Listeleme

```bash
node index.js listele
```

**Çıktı:**

```
1 - Not 1
2 - Not 2
```

---

### 3️⃣ Silme

```bash
node index.js sil 1
```

**Yeni notlar.json:**

```json
[
  { "id": 2, "not": "Not 2" }
]
```

---

## ⚠️ Hata Yönetimi

Uygulama boyunca tüm dosya işlemleri `try/catch` blokları ile korunmaktadır.

- ❌ `notlar.json` dosyası eksikse, otomatik oluşturulur.
- ❌ Hatalı komut verilirse, kullanıcıya bilgi verilir.
- ❌ Geçersiz ID girilirse, “ID bulunamadı” uyarısı gösterilir.

---

