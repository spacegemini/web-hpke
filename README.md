# web-hpke - ECC/HPKE Key Management & Encryption Tool

[简体中文](./README_zh.md) | English

A client-side secure file and text encryption tool built with **ECC/HPKE (P-256)**. Completely offline-capable, highly secure, and requires no server file uploads, putting privacy entirely in your hands.

## 🌟 Key Features

- **💯 Client-Side Only**: All encryption and decryption operations are performed exclusively inside your browser. Your data never leaves your device.
- **🔒 High Security & Offline-Ready**: Works flawlessly even when completely disconnected from the internet. Private keys reside strictly on your local device, mitigating external leakage threats.
- **⚡ ECC/HPKE P-256 Algorithm**: Utilizes state-of-the-art asymmetric encryption standards to guarantee robust data security.
- **📁 Universal File & Text Support**: Easily encrypt any file format (generating `.hpke` files) or quickly encrypt plain text messages.
- **🌍 Open Source & Transparent**: No black box. Feel free to inspect the full source execution using your browser's built-in developer tools anytime.
- **📱 PWA Supported**: Install it directly to your desktop or mobile home screen as a standalone application for a native-like experience.

## 🚀 Live Demo

Try the tool immediately without downloading anything:  
👉 **[Launch the Online Tool](https://wemi.pages.dev/hpke)**

*(You can also effortlessly host this static site on GitHub Pages, Vercel, Cloudflare Pages, etc.)*

## 📌 Quick Start Guide

### 1️⃣ Generate Key Pair
Open the tool and click **"Generate Key Pair"**. You will receive:
- **Private Key**: Used for decryption. **Keep this absolutely secret! Never share it with anyone. If lost, your encrypted data cannot be recovered.**
- **Public Key**: Used for encryption. Feel free to share this publicly with anyone who wants to send you encrypted files or messages.

### 2️⃣ Encrypt Data (Sender)
To send a secure file/message to someone:
1. Ask the recipient for their **Public Key** and paste it into the encryption form.
2. Select your file or type your sensitive message.
3. Click "Encrypt". The tool will generate a `.hpke` file or a Base64 ciphertext string for you to securely hand off to the recipient.

### 3️⃣ Decrypt Data (Receiver)
When you receive an encrypted file or message:
1. Paste your **Private Key** into the decryption form.
2. Upload the received `.hpke` file or paste the Base64 ciphertext.
3. Click "Decrypt" to unpack and restore the original file or plain text.

## 💻 Local Setup & Network Independence

This tool is a completely pure static frontend project:

```bash
# 1. Clone the repository
git clone https://github.com/spacegemini/web-hpke.git
cd web-hpke
```

**Regarding Built-in Dependencies**: To maximize security guarantees, the core crypto libraries are bundled locally and saved in the `hpke_lib` directory. This meticulously ensures the tool will execute flawlessly inside air-gapped or fully offline private network environments.

## 🤝 Contributing
Found a bug or have a suggestion? We welcome all contributions! Please feel free to open an [Issue](https://github.com/spacegemini/web-hpke/issues) or submit a [Pull Request](https://github.com/spacegemini/web-hpke/pulls).

## 📄 License
This project is licensed under the [MIT License](./LICENSE).
