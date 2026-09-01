# Flenzo Culture Store

Front-end only React + Vite streetwear/skate storefront.

## Run locally
1. Install Node.js 18.14+.
2. Open this project folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL Vite gives you.

## Build for Netlify
Run `npm run build`. Vite creates the production site in `dist/`.

### Netlify Git deployment
Push this project to GitHub, then in Netlify choose Add new project/site and import the repository.

Use:
- Build command: `npm run build`
- Publish directory: `dist`

Netlify normally detects Vite automatically.

## What to replace before handing it to the client
- Replace the sample Unsplash image URLs with the client's own product/lifestyle photos.
- Change the WhatsApp number in `src/main.jsx` from `254700000000` to the client's real business number.
- Replace sample prices/product names with the real catalog.
- Replace the text/logo styling with the actual Flenzo Culture brand identity.
- Add real checkout/payment/backend only if the client later pays for that scope.

The cart and wishlist currently use browser localStorage. There is no real payment processing or customer database.
