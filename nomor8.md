 HTTP | Router | Headers | Body | Success | Error | Description
------|--------|---------|------|---------|-------|------------
 GET | <span style="color:red">/buku</span> | token | PenulisId | Status: 200<br>[Object{id, name}] | Status: 500<br>Object { message: `Internal Server Error`, err } | Get all Buku based on Penulis' name