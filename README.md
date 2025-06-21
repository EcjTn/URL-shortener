# 📎 Express URL Shortener

A simple URL shortener built with **Express.js**.
This app allows users to send POST requests with a title and a URL, and get back a shortened version for easier sharing.

> ⚠️ **Note:** This project is currently **under development**.

---

## 📬 How It Works

Send a `POST` request with a JSON body
(http://127.0.0.1:8000/api/add):

```
{
  "title": "Tiktok",
  "url": "https://tiktok.com"
}
```

Then it can be visited with:
```http://127.0.0.1:8000/view/(title)```
