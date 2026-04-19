# Cara Menambahkan File Sertifikat

## Struktur Folder yang Dibutuhkan

```
portfolio/
├── index.html
└── certificates/
    ├── ibm-ai-certificate.pdf
    ├── ibm-ai-thumbnail.jpg
    ├── gis-michigan-certificate.pdf
    ├── gis-michigan-thumbnail.jpg
    ├── iot-farming-certificate.pdf
    ├── iot-farming-thumbnail.jpg
    ├── google-data-certificate.pdf
    ├── google-data-thumbnail.jpg
    ├── r-programming-certificate.pdf
    ├── r-programming-thumbnail.jpg
    ├── powerbi-certificate.pdf
    └── powerbi-thumbnail.jpg
```

---

## Langkah-Langkah

### 1. Buat folder `certificates/`
Di lokasi yang sama dengan `index.html`, buat folder bernama `certificates`.

### 2. Tambahkan PDF sertifikat
Letakkan file PDF asli ke folder tersebut sesuai nama di atas.
Contoh: `certificates/powerbi-certificate.pdf`

### 3. Buat thumbnail (JPG/PNG)
Untuk setiap sertifikat, buat screenshot halaman pertama PDF.

**Cara termudah:**
- Buka PDF di browser
- Screenshot halaman pertama
- Crop jadi ukuran ±800×560 px (landscape)
- Compress ke <100KB (pakai squoosh.app atau tinypng.com)
- Simpan sebagai `[nama]-thumbnail.jpg`

**Ukuran yang disarankan:** 800×560px, JPG quality 75–80%

### 4. Upload ke GitHub
Upload seluruh folder `certificates/` ke repository GitHub kamu.

---

## Jika Belum Ada File Sertifikat

Website tetap berfungsi normal. Kartu sertifikat akan menampilkan ikon placeholder bila gambar tidak ditemukan. Tombol "View Certificate" akan tetap muncul tetapi menampilkan gambar kosong sampai file ditambahkan.

---

## Kustomisasi Verify Link

Semua link verifikasi Coursera sudah diisi otomatis:
- Format: `https://coursera.org/verify/[ID_SERTIFIKAT]`

Untuk sertifikat IBM, link verifikasi bisa dicek di halaman LinkedIn badge.

---

## Tips Performa

- Gunakan format JPG untuk thumbnail (bukan PNG)
- Compress thumbnail sebelum upload: [squoosh.app](https://squoosh.app)
- Ukuran ideal per thumbnail: 40–80KB
- PDF tidak perlu di-compress (hanya dimuat saat diklik)
