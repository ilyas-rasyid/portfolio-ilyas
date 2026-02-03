# EmailJS Setup untuk Contact Form

## Quick Setup (2 Menit)

### 1. Dapatkan Public Key dari EmailJS

1. Login ke https://dashboard.emailjs.com/
2. Pergi ke **Account** → **API Keys**
3. Copy **Public Key** (yang dimulai dengan `key_`)

### 2. Update .env File

Edit file `.env` dan ganti `YOUR_PUBLIC_KEY_HERE`:

```
VITE_EMAILJS_PUBLIC_KEY=key_paste_your_public_key_here
```

**Contoh:**
```
VITE_EMAILJS_PUBLIC_KEY=key_1a2b3c4d5e6f7g8h
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Test Contact Form

1. Buka http://localhost:5173 di browser
2. Scroll ke section Contact
3. Isi form dengan nama, email, dan pesan
4. Klik **Send Message**
5. Email akan diterima di rasyid.ilyas12@gmail.com

## Konfigurasi EmailJS Kamu

- **Service ID**: `service_u7u2kpj`
- **Template ID**: `template_yvecxs4`
- **Public Key**: Dari dashboard EmailJS (API Keys)

## Troubleshooting

**Error: "Failed to send email"**
- Pastikan public key benar di .env
- Pastikan service ID dan template ID sudah setup di EmailJS dashboard
- Check console browser (F12 → Console) untuk error detail

**Email tidak terkirim?**
- Verifikasi email address di EmailJS dashboard
- Check template di EmailJS (pastikan variable {{from_name}}, {{from_email}}, {{message}} ada)

## Notes

- Public Key aman untuk di-expose (tidak seperti private key)
- Private key JANGAN pernah di-share atau commit ke GitHub
- EmailJS free plan: 200 email/bulan
