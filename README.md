# Vadamihad — Portfolio Website

Personal portfolio website for Vadamihad, Agronomy student at Universitas Gadjah Mada.

## 🌿 Live Site

After deploying, your site will be available at:
`https://[your-github-username].github.io`

---

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### 1. Buat GitHub Account
Kalau belum punya, daftar di [github.com](https://github.com)

### 2. Buat Repository Baru
1. Klik tombol **"New"** atau **"+"** di GitHub
2. Nama repository: **`[username].github.io`**
   - Contoh: kalau username kamu `vadamihad`, nama repo-nya `vadamihad.github.io`
3. Set ke **Public**
4. Klik **"Create repository"**

### 3. Upload File
**Cara mudah (drag & drop):**
1. Buka repository yang baru dibuat
2. Klik **"uploading an existing file"**
3. Drag & drop file `index.html` ke halaman tersebut
4. Scroll ke bawah, klik **"Commit changes"**

**Cara via Git (opsional):**
```bash
git init
git add index.html
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/[username]/[username].github.io.git
git push -u origin main
```

### 4. Aktifkan GitHub Pages
1. Buka **Settings** di repository
2. Klik **Pages** di sidebar kiri
3. Di bagian **Source**, pilih branch **`main`**
4. Klik **Save**
5. Tunggu 1–2 menit, lalu buka `https://[username].github.io` 🎉

---

## ✏️ Cara Update Konten

### Tambah Project Baru
Buka `index.html`, cari section `<!-- PROJECTS -->`, lalu tambahkan card baru:

```html
<div class="project-card">
  <div class="project-num">03</div>
  <div class="project-title">Judul Project Kamu</div>
  <div class="project-desc">Deskripsi singkat project kamu di sini.</div>
  <div class="project-tags">
    <span class="project-tag">Tag 1</span>
    <span class="project-tag">Tag 2</span>
  </div>
</div>
```

### Update Kontak
Cari bagian `<!-- CONTACT -->` dan update email/LinkedIn:

```html
<a href="mailto:kamu@email.com" class="contact-value">kamu@email.com</a>
<a href="https://linkedin.com/in/username" class="contact-value">linkedin.com/in/username</a>
```

### Ganti Sample Projects
Cari `<!-- Sample project cards -->` dan ganti isinya dengan project asli kamu.

---

## 📁 Struktur File

```
portfolio/
└── index.html      ← Semua konten ada di sini (single file)
└── README.md       ← Panduan ini
```

---

## 🎨 Kustomisasi

Semua warna ada di bagian `:root` di dalam `<style>`:

```css
--green: #2D5A27;        /* Warna utama hijau */
--green-mid: #4A7C43;    /* Hijau medium */
--accent: #8B6914;       /* Warna aksen gold */
--cream: #F7F4EE;        /* Background krem */
```

---

Dibuat dengan ❤️ untuk Vadamihad · Agronomi UGM
