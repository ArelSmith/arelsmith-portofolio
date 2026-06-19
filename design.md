# Dokumen Desain (Design System) - Portfolio Arel Smith

Dokumen ini menjelaskan sistem desain (*design system*) yang diterapkan pada website Portfolio Arel Smith. Panduan ini mencakup skema warna, tipografi, efek visual, animasi, dan tata letak untuk menjaga konsistensi visual saat melakukan pengembangan di masa mendatang.

---

## 1. Palet Warna (Color Palette)

Aplikasi ini menggunakan perpaduan warna bumi hangat (*warm earth tones*) dengan warna biru tua yang kontras untuk memberikan kesan modern, bersahabat, sekaligus profesional.

| Token Warna | Nilai Hex | Variabel CSS | Deskripsi / Penggunaan |
| :--- | :--- | :--- | :--- |
| **Background (Cream)** | `#EFE4D2` | `--color-bg` | Warna latar belakang dasar situs untuk kenyamanan membaca. |
| **Primary (Slate Blue)** | `#254D70` | `--color-primary` | Warna aksen utama untuk elemen visual tertentu. |
| **Secondary (Navy Blue)** | `#131D4F` | `--color-secondary` | Warna aksen sekunder untuk kontras tinggi. |
| **Tertiary (Terracotta)** | `#954C2E` | `--color-tertiary` | Warna burnt orange/tanah liat untuk tombol utama (*CTA*) dan highlight penting. |
| **Text Dark (Slate)** | `#1E293B` | `text-slate-800` | Warna teks utama untuk kontras optimal di atas latar krem. |

---

## 2. Tipografi (Typography)

*   **Font Utama**: `Jost` (Sans-serif)
    *   **Variabel CSS**: `--font-jost`
    *   **Karakteristik**: Geometris, modern, dan sangat bersih saat digunakan pada judul berukuran besar (*display headers*) maupun teks deskripsi.
*   **Penerapan**:
    *   Judul Halaman Utama: `font-bold text-5xl lg:text-7xl`
    *   Subjudul: `font-semibold text-2xl lg:text-3xl`
    *   Teks Paragraf: `font-medium text-xl opacity-75`

---

## 3. Tata Letak & Grid (Layout & Grid)

Tata letak website ini dibangun menggunakan prinsip responsif (*mobile-first*) dengan struktur container yang konsisten:

*   **Desktop Container**: Secara umum menggunakan lebar `max-w-8/12 mx-auto` atau `max-w-5xl mx-auto` agar konten terpusat rapi di layar lebar.
*   **Flex Direction**: Kolom bertumpuk secara vertikal di mobile, lalu berubah menjadi baris horizontal di layar lebar (`flex-col-reverse lg:flex-row`).
*   **Jarak Section**: Jarak antar-section yang cukup renggang (`mt-50` / `mt-[76px]`) untuk memberikan ruang bernafas (*whitespace*) yang elegan pada layout.

---

## 4. Efek Visual & Interaktivitas

### A. Grayscale Hover Effect (Efek Gambar)
Foto profil dan gambar utama diatur agar terlihat artistik dengan efek desaturasi:
*   **Tampilan Default (Desktop)**: Gambar dibuat abu-abu (`lg:grayscale`).
*   **Tampilan Hover/Mobile**: Saat kursor diarahkan ke gambar atau saat dibuka lewat handphone, gambar bertransisi menjadi berwarna penuh (`grayscale-0 hover:grayscale-0 transition duration-300`).

### B. 3D Tilt Card (Efek Kemiringan 3D)
Menggunakan library `vanilla-tilt` untuk memberikan sensasi interaktif kedalaman 3D pada foto profil atau kartu keahlian saat kursor digerakkan di atasnya.
*   **Konfigurasi**:
    ```javascript
    VanillaTilt.init(element, {
      max: 25,     // Sudut kemiringan maksimal
      speed: 1000, // Kecepatan transisi kembali
      transition: true,
    });
    ```

---

## 5. Animasi & Transisi (Motion Design)

Sistem animasi didukung penuh oleh **Motion (Framer Motion v12)** dengan tipe transisi `tween` yang halus dan konsisten:

*   **Slide-In Left (Default Entry)**: 
    Elemen teks meluncur lembut dari kiri ke kanan (`x: -80` ke `x: 0`) dengan efek opacity bertahap menggunakan trigger `useInView` saat elemen masuk ke viewport.
*   **Slide-In Right (Reversed Entry)**:
    Elemen visual/gambar meluncur dari kanan ke kiri (`x: 80` ke `x: 0`) untuk menyeimbangkan gerakan teks.
*   **Micro-interactions (Button Tap)**:
    Semua tombol interaktif menggunakan efek pengecilan skala instan saat ditekan (`whileTap={{ scale: 0.9 }}`) untuk memberikan feedback sentuhan yang memuaskan.
*   **Hamburger Navigation (Circle Clip-Path)**:
    Menu navigasi mobile menggunakan animasi tirai melingkar (*circle clip-path*) dinamis yang menyebar secara radial dari pojok kanan atas layar dengan efek pegas (`type: "spring"`).
*   **Typewriter Effect**:
    Gelar profesi pada Jumbotron menggunakan animasi ketikan teks bergantian secara berulang (*infinite typing loop*) menggunakan `react-typed`.
