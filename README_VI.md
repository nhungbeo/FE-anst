# ANST Study - Huong dan Vite

Du an duoc cai dat lai tren Vite de co thoi gian build nhanh hon va cau hinh don gian hon.

## Lenh co san

- `npm run dev`: khoi dong server Vite (su dung `VITE_PORT` neu duoc khai bao, mac dinh 5555).
- `npm run build`: dong goi san pham vao thu muc `dist/`.
- `npm run preview`: chay thu ban build tren may local.
- `npm run test`: chay bo test bang Vitest va Testing Library.
- `npm run deploy`: day noi dung trong `dist/` len GitHub Pages.

## Bien moi truong

Tao file `.env` va dat ten bien voi tien to `VITE_` de Vite expose len client:

```
VITE_PORT=5555
VITE_API_URL=http://localhost:3333
```

`VITE_API_URL` duoc su dung trong cac ham fetch va axios de lien ket voi backend.

## Tai nguyen tinh

Cac file trong `public/` giu nguyen va duoc serve truc tiep. Tham chieu den chung bang duong dan bat dau bang `/`, vi du `/favicon.ico`.

## Test

`src/setupTests.js` dang cau hinh matchers tu `@testing-library/jest-dom/vitest`. Vitest su dung moi truong `jsdom` nen ban co the test cac tuong tac DOM thong thuong.
