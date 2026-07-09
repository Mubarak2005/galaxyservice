# Galaxy Service — Home Appliance Repair Website

A clean, modern, responsive React + Tailwind CSS website for a home appliance repair
company, built with Vite, Lucide icons, Swiper carousel, and Framer Motion animations.

## Tech Stack

- React 18 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Lucide React (icons)
- Swiper JS (hero carousel)
- Framer Motion (scroll/hover animations)

## Getting Started

```bash
npm create vite@latest galaxy-service
# choose React, then copy these files into the generated folder

npm install
npm install tailwindcss @tailwindcss/vite lucide-react swiper framer-motion

npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Project Structure

```
galaxy-service/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data.js                 # all site copy & content in one place
    └── components/
        ├── Navbar.jsx
        ├── HeroCarousel.jsx
        ├── ServiceCard.jsx
        ├── Services.jsx
        ├── About.jsx
        ├── ServiceArea.jsx
        ├── WhyChooseUs.jsx
        ├── Reviews.jsx
        └── Footer.jsx
```

## Notes

- All CTAs use `tel:` links ("Call Now") — there is no booking form, modal, or cart.
- Update the phone number, email, and service areas in `src/data.js`.
- The Service Area map is a Google Maps embed centered on Vadodara — swap the `src`
  in `ServiceArea.jsx` for your exact business location if needed.
- Appliance photos are placeholder Unsplash images — swap `image` fields in
  `src/data.js` with your own photos before going live.
